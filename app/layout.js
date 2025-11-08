import "./globals.css";
import Link from "next/link";
import { useEffect } from "react";

export const metadata = {
    title: "Murtaza Al-Omran | Portfolio",
};

export default function RootLayout({ children }) {
    useEffect(() => {
        // تحميل الصوت مرة وحدة
        const clickSound = new Audio("/audio/m1.mp3");
        clickSound.preload = "auto";

        // يشتغل عند الضغط على روابط nav فقط
        const handleClick = (e) => {
            const link = e.target.closest("nav a");
            if (link) {
                clickSound.currentTime = 0;
                clickSound.play().catch(() => { });
            }
        };

        document.addEventListener("click", handleClick);

        // تنظيف عند إزالة المكون
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👽</text></svg>"
                />
                <link rel="stylesheet" href="/css/main.css" />
            </head>
            <body>
                <canvas id="fx"></canvas>

                <div className="music-toggle" id="musicBtn">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <nav>
                    <Link href="/">HOME</Link>
                    <Link href="/work">WORK</Link>
                    <Link href="/art">ART</Link>
                    <Link href="/info">INFO</Link>
                    <Link href="/reel">REEL</Link>
                </nav>

                <main id="pages">{children}</main>
            </body>
        </html>
    );
}
