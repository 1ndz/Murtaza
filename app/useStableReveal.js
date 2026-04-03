"use client";

import { useEffect } from "react";

export default function useStableReveal(selector = ".animate-on-scroll") {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll(selector));
        if (!elements.length) return;

        const root = document.documentElement;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            elements.forEach((element) => element.classList.add("in-view"));
            return;
        }

        let rafId = 0;
        const revealVisible = () => {
            const viewportHeight = window.innerHeight;

            elements.forEach((element) => {
                if (element.classList.contains("in-view")) return;

                const rect = element.getBoundingClientRect();
                if (rect.top <= viewportHeight * 0.9 && rect.bottom >= viewportHeight * 0.08) {
                    element.classList.add("in-view");
                }
            });
        };

        const scheduleReveal = () => {
            window.cancelAnimationFrame(rafId);
            rafId = window.requestAnimationFrame(revealVisible);
        };

        root.classList.add("reveal-active");
        rafId = window.requestAnimationFrame(revealVisible);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -8% 0px"
            }
        );

        elements.forEach((element) => {
            if (element.classList.contains("in-view")) return;
            observer.observe(element);
        });

        document.addEventListener("scroll", scheduleReveal, { passive: true, capture: true });
        window.addEventListener("resize", scheduleReveal, { passive: true });

        return () => {
            observer.disconnect();
            window.cancelAnimationFrame(rafId);
            document.removeEventListener("scroll", scheduleReveal, true);
            window.removeEventListener("resize", scheduleReveal);
        };
    }, [selector]);
}
