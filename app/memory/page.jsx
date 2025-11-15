"use client";
import "./memory.css";

export default function Home() {
    return (
        <div suppressHydrationWarning>
            <div className="box MemoryBox">
                <canvas id="fx"></canvas>

                <div className="overlay MemoryOverlay">
                    <div className="hero">
                        <h1>MEMORY</h1>
                        {/* <p>CREATIVE&nbsp;|&nbsp;TECHNOLOGIST&nbsp;|&nbsp;DEVELOPER</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
