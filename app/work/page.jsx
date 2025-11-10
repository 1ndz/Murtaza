"use client";
import "./work.css"; // <-- مو /work.css، لازم ./ لأنك داخل نفس المجلد

export default function Work() {
    return (
        <div suppressHydrationWarning>
            <div className="box">
                <canvas id="fx"></canvas>

                <div className="overlay">
                    <div className="hero">
                        <h1>WORK</h1>
                        <p>Projects&nbsp;|&nbsp;Collaborations&nbsp;|&nbsp;Explorations</p>
                    </div>
                </div>
                <div className="View">
                    <a href="./movies">
                        <div className="item">
                            <img src="./img/movies.webp" alt="App Movies" />
                            <h2>Veria TV</h2>
                            <p>A modern platform for exploring movies and TV series</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
