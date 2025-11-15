"use client";
import "./memory.css";
import Image from "next/image";
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
            <div className="box MemoryBox">
                <canvas id="fx"></canvas>

                <div className="Memoryer">
                    <div className="overlay MemoryOverlay">
                        <div className="hero animate-on-scroll" data-anim="left">
                            <h1>MEMORY</h1>
                            <p>MEMORY&nbsp;|&nbsp;HISTORY&nbsp;|&nbsp;THE PAST</p>
                        </div>
                    </div>

                    <div className="MemoryView">
                        <div class="m-card type-purple">
                            <div class="m-line"></div>
                            <div class="m-body">
                                <span class="m-title">Memory — 2024/11/15</span>
                                <p class="m-text">ذكرى معينة تحب تكتبها هنا بشكل بسيط وواضح.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
