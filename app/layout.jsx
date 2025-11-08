"use client";
import { useEffect } from "react";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
    useEffect(() => {
        if (window.__fxLoaded) return; // منع التحميل المكرر
        window.__fxLoaded = true;

        const three = document.createElement("script");
        three.src = "/js/three.js";
        three.async = true;
        document.body.appendChild(three);

        const main = document.createElement("script");
        main.src = "/js/main.js";
        main.async = true;
        document.body.appendChild(main);

        return () => {
            // نتركها ما نحذفها، لأن نريدها تبقى بكل الصفحات
        };
    }, []);

    return (
        <html lang="en">
            <body>
                <div className="box">
                    <canvas id="fx"></canvas>

                    <div className="music-toggle active" id="musicBtn">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>

                    <audio id="music" src="/audio/m1.mp3" loop></audio>

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
