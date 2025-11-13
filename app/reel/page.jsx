"use client";
import "./reel.css";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const elements = document.querySelectorAll(".animate-on-scroll");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <div suppressHydrationWarning>
            <div className="box ReelBox">
                <canvas id="fx"></canvas>

                <div className="Reeler">
                    <div className="overlay ReelOverlay">
                        <div className="hero animate-on-scroll" data-anim="left">
                            <h1>REEL</h1>
                            <p>CREATIVE&nbsp;|&nbsp;TECHNOLOGIST&nbsp;|&nbsp;DEVELOPER</p>
                        </div>
                    </div>

                    <div className="ReelView">
                        <div className="ReelVideos">
                            <h2 className="animate-on-scroll" data-anim="left">- [Storys] -</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
