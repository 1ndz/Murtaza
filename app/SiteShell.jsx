"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const ROUTE_QUEUE = ["/", "/work", "/memory", "/info", "/reel", "/work/movies"];
const ASSET_QUEUE = ["/js/three.js", "/audio/m1.wav"];

function warmAsset(href) {
    if (href.endsWith(".wav")) {
        const audio = new Audio();
        audio.preload = "auto";
        audio.src = href;
        return;
    }

    fetch(href).catch(() => null);
}

function warmSite(router) {
    const run = () => {
        ROUTE_QUEUE.forEach((href) => {
            try {
                router.prefetch(href);
            } catch { }
        });

        ASSET_QUEUE.forEach((href) => warmAsset(href));
    };

    if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(run, { timeout: 1400 });
        return;
    }

    setTimeout(run, 220);
}

export default function SiteShell({ children }) {
    const pathname = usePathname();
    const router = useRouter();

    const navItems = useMemo(
        () => [
            { href: "/", label: "HOME" },
            { href: "/work", label: "WORK" },
            { href: "/memory", label: "MEMORY" },
            { href: "/info", label: "INFO" },
            { href: "/reel", label: "REEL" }
        ],
        []
    );

    useEffect(() => {
        if (!window.__fxLoaded) {
            window.__fxLoaded = true;

            const three = document.createElement("script");
            three.src = "/js/three.js";
            three.async = true;
            three.dataset.siteFx = "true";
            document.body.appendChild(three);
        }

        if (!window.__siteClickSound) {
            const clickSound = new Audio("/audio/m1.wav");
            clickSound.preload = "auto";
            window.__siteClickSound = clickSound;
        }

        const handleClick = (event) => {
            const link = event.target.closest("a");
            if (!link || !window.__siteClickSound) return;

            window.__siteClickSound.currentTime = 0;
            window.__siteClickSound.play().catch(() => { });
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    useEffect(() => {
        warmSite(router);
    }, [router]);

    return (
        <div className="SiteShell">
            <canvas id="fx"></canvas>

            <hr className="NavDivider" />

            <nav>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={pathname === item.href ? "active" : ""}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <main>{children}</main>
        </div>
    );
}
