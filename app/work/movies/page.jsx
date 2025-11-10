"use client";
// import "./work.css";

export default function Work() {
    return (
        <div suppressHydrationWarning>
            <div className="box">
                <canvas id="fx"></canvas>

                <div className="overlay WorkOverlay">
                    <div className="hero">
                        <h1>WORK</h1>
                        <p>Projects&nbsp;|&nbsp;Collaborations&nbsp;|&nbsp;Explorations</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
