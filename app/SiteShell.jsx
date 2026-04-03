"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useStableReveal from "./useStableReveal";

const NAV_ITEMS = [
    { href: "/", label: "HOME" },
    { href: "/work", label: "WORK" },
    { href: "/memory", label: "MEMORY" },
    { href: "/info", label: "INFO" },
    { href: "/reel", label: "REEL" }
];

function ensureClickSound() {
    if (typeof window === "undefined") return null;

    if (!window.__siteClickSound) {
        const clickSound = new Audio("/audio/m1.wav");
        clickSound.preload = "auto";
        window.__siteClickSound = clickSound;
    }

    return window.__siteClickSound;
}

export default function SiteShell({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const prefetchedRoutes = useRef(new Set());

    useStableReveal(".animate-on-scroll", pathname);

    const prefetchRoute = (href) => {
        if (!href || !href.startsWith("/") || prefetchedRoutes.current.has(href)) return;

        prefetchedRoutes.current.add(href);

        try {
            router.prefetch(href);
        } catch { }
    };

    const handleNavIntent = (event) => {
        prefetchRoute(event.currentTarget.getAttribute("href"));
    };

    useEffect(() => {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const shouldSkipFx =
            window.matchMedia("(prefers-reduced-motion: reduce)").matches || Boolean(connection?.saveData);
        let idleId;
        let timeoutId;

        const loadFx = () => {
            if (shouldSkipFx || window.__fxLoaded || document.querySelector('script[data-site-fx="true"]')) {
                return;
            }

            window.__fxLoaded = true;

            const three = document.createElement("script");
            three.src = "/js/three.js";
            three.async = true;
            three.dataset.siteFx = "true";
            document.body.appendChild(three);
        };

        if (!shouldSkipFx) {
            if (typeof window.requestIdleCallback === "function") {
                idleId = window.requestIdleCallback(loadFx, { timeout: 2200 });
            } else {
                timeoutId = window.setTimeout(loadFx, 900);
            }
        }

        const primeSound = () => {
            ensureClickSound();
        };

        const handleClick = (event) => {
            const link = event.target.closest("a");
            if (!link) return;

            prefetchRoute(link.getAttribute("href"));

            const clickSound = ensureClickSound();
            if (!clickSound) return;

            clickSound.currentTime = 0;
            clickSound.play().catch(() => { });
        };

        document.addEventListener("pointerdown", primeSound, { passive: true, capture: true, once: true });
        document.addEventListener("keydown", primeSound, { capture: true, once: true });
        document.addEventListener("click", handleClick);

        return () => {
            if (typeof window.cancelIdleCallback === "function" && idleId) {
                window.cancelIdleCallback(idleId);
            }

            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }

            document.removeEventListener("pointerdown", primeSound, true);
            document.removeEventListener("keydown", primeSound, true);
            document.removeEventListener("click", handleClick);
        };
    }, [router]);

    return (
        <div className="SiteShell">
            <canvas id="fx"></canvas>

            <hr className="NavDivider" />

            <nav>
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        prefetch={false}
                        className={pathname === item.href ? "active" : ""}
                        onMouseEnter={handleNavIntent}
                        onFocus={handleNavIntent}
                        onTouchStart={handleNavIntent}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <main>{children}</main>
        </div>
    );
}
