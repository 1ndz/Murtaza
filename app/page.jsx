import Link from "next/link";
import styles from "./page.module.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const signals = [
    {
        title: "AI-native Products",
        text: "Building model-aware tools, intelligent flows, and interfaces that respond like living systems."
    },
    {
        title: "Launch-grade Web",
        text: "Designing modern web experiences with stronger pacing, clearer structure, and production-ready execution."
    },
    {
        title: "Visual Direction",
        text: "Shaping motion, 3D tone, and digital atmosphere so the product feels distinct before it even speaks."
    }
];

const orbitLabels = ["Model Logic", "Realtime Surface", "Visual Motion", "Neon Systems"];

export default function Home() {
    return (
        <div suppressHydrationWarning>
            <section className={styles.HomeViewport}>
                <div className={styles.HomeOrbitDock} aria-hidden="true">
                    <div className={styles.OrbitShell}>
                        <span className={`${styles.OrbitRing} ${styles.OrbitOuter}`}></span>
                        <span className={`${styles.OrbitRing} ${styles.OrbitMiddle}`}></span>
                        <span className={`${styles.OrbitRing} ${styles.OrbitInner}`}></span>
                        <span className={`${styles.OrbitArc} ${styles.OrbitArcA}`}></span>
                        <span className={`${styles.OrbitArc} ${styles.OrbitArcB}`}></span>
                        <span className={`${styles.OrbitArc} ${styles.OrbitArcC}`}></span>
                        <span className={styles.OrbitPulse}></span>

                        <div className={styles.OrbitLabels}>
                            {orbitLabels.map((label) => (
                                <span key={label}>{label}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.HomeShell}>
                    <div className={`${styles.HomeIntro} animate-on-scroll`} data-anim="write">
                        <span className={styles.HomeKicker}>AI-Native Creative Engineer</span>
                        <h1 className={styles.HomeTitle}>
                            <span>MURTAZA</span>
                            <span>AL-OMRAN</span>
                        </h1>
                        <p className={styles.HomeLead}>
                            I design digital work that thinks clearly, moves cleanly, and looks deliberate. The goal
                            is not just to ship features, but to build interfaces with atmosphere, intelligence, and
                            direction.
                        </p>
                    </div>

                    <div className={`${styles.HomeMetaRail} animate-on-scroll`} data-anim="left" style={{ "--reveal-delay": "70ms" }}>
                        <span>AI Systems</span>
                        <span>Web Launches</span>
                        <span>3D Direction</span>
                        <span>Modern Interfaces</span>
                    </div>

                    <div className={styles.HomeSignals}>
                        {signals.map((signal, index) => (
                            <article
                                key={signal.title}
                                className={`${styles.SignalRow} animate-on-scroll`}
                                data-anim={index % 2 === 0 ? "left" : "right"}
                                style={{ "--reveal-delay": `${120 + index * 80}ms` }}
                            >
                                <span className={styles.SignalIndex}>{String(index + 1).padStart(2, "0")}</span>
                                <div className={styles.SignalContent}>
                                    <h2>{signal.title}</h2>
                                    <p>{signal.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className={`${styles.HomeActions} animate-on-scroll`} style={{ "--reveal-delay": "320ms" }}>
                        <Link href="/work" prefetch={false} className={styles.PrimaryAction}>
                            View work
                        </Link>
                        <Link href="/info" prefetch={false} className={styles.SecondaryAction}>
                            Open info
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
