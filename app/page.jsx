"use client";

export default function Home() {
    return (
        <div suppressHydrationWarning>
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

                <div className="overlay">
                    <div className="hero">
                        <h1>MURTAZA&nbsp;AL-OMRAN</h1>
                        <p>CREATIVE&nbsp;|&nbsp;TECHNOLOGIST&nbsp;|&nbsp;DEVELOPER</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
