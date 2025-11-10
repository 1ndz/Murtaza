"use client";
import "./reel.css";

export default function Home() {
    return (
        <div suppressHydrationWarning>
            <div className="box ReelBox">
                <canvas id="fx"></canvas>

                <div className="overlay ReelOverlay">
                    <div className="hero">
                        <h1>REEL</h1>
                        <p>CREATIVE&nbsp;|&nbsp;TECHNOLOGIST&nbsp;|&nbsp;DEVELOPER</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
