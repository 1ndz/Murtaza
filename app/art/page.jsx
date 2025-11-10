"use client";
import "./art.css";

export default function Home() {
    return (
        <div suppressHydrationWarning>
            <div className="box ArtBox">
                <canvas id="fx"></canvas>

                <div className="overlay ArtOverlay">
                    <div className="hero">
                        <h1>ART</h1>
                        <p>CREATIVE&nbsp;|&nbsp;TECHNOLOGIST&nbsp;|&nbsp;DEVELOPER</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
