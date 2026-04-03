import "./globals.css";
import SiteShell from "./SiteShell";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
    title: "Murtaza Al-Omran",
    description: "Creative technologist portfolio"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
            </head>
            <body>
                <SiteShell>{children}</SiteShell>
            </body>
        </html>
    );
}
