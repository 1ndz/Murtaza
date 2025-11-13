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
                            <iframe src="https://player.vimeo.com/video/1136621399?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="instagram1"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
