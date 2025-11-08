"use client";
import { useEffect } from "react";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
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
        const clickSound = new Audio("/audio/m1.mp3");
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

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <html lang="en">
            <body>
                <div className="box">
                    <canvas id="fx"></canvas>

                    <nav>
                        <Link href="/">HOME</Link>
                        <Link href="/work">WORK</Link>
                        <Link href="/art">ART</Link>
                        <Link href="/info">INFO</Link>
                        <Link href="/reel">REEL</Link>
                    </nav>

                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
