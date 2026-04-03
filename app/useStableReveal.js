"use client";

import { useEffect } from "react";

const REVEAL_START_LINE = 1;
const OBSERVER_BOTTOM_MARGIN = "0px";

export default function useStableReveal(selector = ".animate-on-scroll", refreshKey = selector) {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll(selector));
        if (!elements.length) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const pending = new Set();
        let rafId = 0;
        let observer;
        let listenersAttached = false;

        const detachListeners = () => {
            if (!listenersAttached) return;

            document.removeEventListener("scroll", scheduleReveal, true);
            window.removeEventListener("resize", scheduleReveal);
            listenersAttached = false;
        };

        const markVisible = (element) => {
            if (!pending.has(element)) return;

            element.classList.add("in-view");
            pending.delete(element);

            if (observer) {
                observer.unobserve(element);
            }

            if (!pending.size) {
                detachListeners();
            }
        };

        if (prefersReducedMotion) {
            elements.forEach((element) => element.classList.add("reveal-ready", "in-view"));
            return;
        }

        const revealVisible = () => {
            const triggerLine = window.innerHeight * REVEAL_START_LINE;

            pending.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top <= triggerLine && rect.bottom >= 0) {
                    markVisible(element);
                }
            });
        };

        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight * REVEAL_START_LINE && rect.bottom >= 0) {
                element.classList.add("in-view");
            } else {
                pending.add(element);
            }

            element.classList.add("reveal-ready");
        });

        if (!pending.size) return;

        const scheduleReveal = () => {
            if (!pending.size) return;

            window.cancelAnimationFrame(rafId);
            rafId = window.requestAnimationFrame(revealVisible);
        };

        document.addEventListener("scroll", scheduleReveal, { passive: true, capture: true });
        window.addEventListener("resize", scheduleReveal, { passive: true });
        listenersAttached = true;

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    markVisible(entry.target);
                });
            },
            {
                threshold: 0,
                rootMargin: `0px 0px ${OBSERVER_BOTTOM_MARGIN} 0px`
            }
        );

        pending.forEach((element) => {
            observer.observe(element);
        });

        scheduleReveal();

        return () => {
            detachListeners();
            observer.disconnect();
            window.cancelAnimationFrame(rafId);
        };
    }, [selector, refreshKey]);
}
