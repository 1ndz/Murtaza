"use client";
import { useEffect } from "react";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        // منع التحميل المكرر
        if (window.__fxLoaded) return;
        window.__fxLoaded = true;

        // تحميل سكربت three.js
        const three = document.createElement("script");
        three.src = "/js/three.js";
        three.async = true;
        document.body.appendChild(three);

        // تحميل صوت النقرة مرة وحدة
        const clickSound = new Audio("/audio/m1.wav");
        clickSound.preload = "auto";

        // عند النقر على روابط nav فقط
        const handleClick = (e) => {
            const link = e.target.closest("nav a");
            if (link) {
                clickSound.currentTime = 0;
                clickSound.play().catch(() => { });
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <html lang="en">
            <body>
                <div className="box">
                    <canvas id="fx"></canvas>

                    <nav>
                        <Link href="/" className={pathname === "/" ? "active" : ""}>HOME</Link>
                        <Link href="/work" className={pathname === "/work" ? "active" : ""}>WORK</Link>
                        <Link href="/art" className={pathname === "/art" ? "active" : ""}>ART</Link>
                        <Link href="/info" className={pathname === "/info" ? "active" : ""}>INFO</Link>
                        <Link href="/reel" className={pathname === "/reel" ? "active" : ""}>REEL</Link>
                    </nav>

                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
