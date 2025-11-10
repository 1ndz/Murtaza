"use client";
import "./work.css";
import Image from "next/image";
import moviesImg from "./img/movies.webp";

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

                <div className="View">
                    <a href="./movies">
                        <div className="item">
                            <Image src={moviesImg} alt="App Movies" className="img" />
                            <h2>Veria TV</h2>
                            <p>A modern platform for exploring movies and TV series</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
