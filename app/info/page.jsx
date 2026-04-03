"use client";

import "./info.css";
import Image from "next/image";
import useStableReveal from "../useStableReveal";

import Img1 from "./img/img1.webp";
import Img2 from "./img/img2.webp";
import Img4 from "./img/img4.webp";
import Img5 from "./img/img5.webp";
import Img6 from "./img/img6.webp";
import Img7 from "./img/img7.webp";
import Img3 from "./img/img3.svg";

import i1 from "./icon/i1.webp";
import i2 from "./icon/i2.webp";
import i3 from "./icon/i3.webp";

const bioParagraphs = [
    "Murtaza Al-Omran is a multidisciplinary AI developer, full-stack engineer, and creative technologist from southern Iraq, building digital experiences where intelligence, interaction, and visual atmosphere operate as one system.",
    "His work sits between AI-native product design, modern web engineering, and motion-led storytelling. The focus is always on interfaces that feel responsive, legible, and emotionally tuned rather than cold or purely technical.",
    "On the AI side, he works with prompt architecture, evaluation loops, retrieval workflows, structured outputs, agent behavior, and multimodal product thinking to turn model capability into useful real-world experiences.",
    "On the engineering side, he builds with Next.js, React, Node.js, API-driven services, realtime interaction patterns, and performance-minded frontend systems that are meant to launch cleanly and scale with confidence.",
    "His creative practice extends into 3D direction, motion, digital composition, and post-production, allowing him to carry a project from concept and interface logic to visual tone, animation, and presentation quality.",
    "Across independent collaborations, startup work, and self-directed builds, his goal remains consistent: make technology feel alive, precise, and human while staying aligned with modern workflows, sharper tools, and current product expectations."
];

const awards = [
    { image: Img1, alt: "Cannes Gold", title: "Cannes Gold X2", detail: "Festival distinction" },
    { image: Img1, alt: "Cannes Silver", title: "Cannes Silver", detail: "Festival distinction" },
    { image: Img1, alt: "Cannes Bronze", title: "Cannes Bronze X4", detail: "Festival distinction" },
    { image: Img3, alt: "Red Dot - DDS", title: "Red Dot - DDS", detail: "Design distinction" },
    { image: Img3, alt: "Red Dot - Gran Prix X2", title: "Red Dot - Gran Prix X2", detail: "Design distinction" },
    { image: Img3, alt: "Red Dot X5", title: "Red Dot - X5", detail: "Design distinction" },
    { image: Img4, alt: "Gold Website - X2", title: "Gold Website - X2", detail: "Digital experience award" },
    { image: Img5, alt: "The Webby Website - X2", title: "The Webby Website - X2", detail: "Web recognition" },
    { image: Img6, alt: "Craft Website Design Merit", title: "Craft Website Design Merit", detail: "Craft distinction" },
    { image: Img2, alt: "Cutting Edge of the Week", title: "Cutting Edge of the Week", detail: "Feature selection" }
].map((item, index) => ({
    ...item,
    serial: String(index + 1),
    repeatCount: Number(item.title.match(/x\s*(\d+)/i)?.[1] || 0),
    kind: "Award"
}));

const certificates = [
    { image: Img7, title: "Deep Learning Engineer", detail: "Advanced specialization" },
    { image: Img7, title: "Machine Learning Engineer", detail: "Applied intelligence track" },
    { image: Img7, title: "Quantitative Analyst", detail: "Data-led modeling track" }
].map((item, index) => ({
    ...item,
    serial: String(index + 1),
    kind: "Certificate"
}));

const contacts = [
    {
        href: "https://instagram.com/1nd.z",
        image: i1,
        alt: "instagram account",
        label: "Instagram",
        value: "@1nd.z",
        name: "Murtaza Al-Omran"
    },
    {
        href: "https://t.me/c2_0r",
        image: i2,
        alt: "telegram account",
        label: "Telegram",
        value: "@c2_0r",
        name: "Murtaza Al-Omran"
    },
    {
        href: "https://tv-v.netlify.app",
        image: i3,
        alt: "veria website",
        label: "Website",
        value: "tv-v.netlify.app",
        name: "Veria TV"
    }
];

const metrics = [
    { value: "4+", label: "Years across AI, interfaces, and visual systems." },
    { value: "10", label: "Award entries mapped through the recognition timeline." },
    { value: "3", label: "Core tracks: intelligence, launch surfaces, and motion." }
];

function RecognitionField({ items }) {
    const featured = items
        .filter((item) => !item.repeatCount)
        .map((item, index) => ({ ...item, displaySerial: String(index + 1).padStart(2, "0") }));
    const ledger = items
        .filter((item) => item.repeatCount)
        .map((item, index) => ({
            ...item,
            displaySerial: String(featured.length + index + 1).padStart(2, "0"),
            trackWidth: `${Math.min(58, Math.max(16, 12 + item.repeatCount * 10))}px`
        }));

    return (
        <div className="RecognitionField">
            <div className="RecognitionStage">
                <div className="RecognitionStageAura" aria-hidden="true"></div>

                {featured.map((item, index) => (
                    <article
                        key={`recognition-featured-${item.title}`}
                        className={`RecognitionPlate plate-${index + 1} animate-on-scroll`}
                        data-anim={index % 2 === 0 ? "left" : "right"}
                        style={{ "--item-index": index, "--reveal-delay": `${90 + index * 80}ms` }}
                    >
                        <div className="RecognitionPlateTop">
                            <span className="RecognitionKind">{item.kind}</span>
                            <span className="RecognitionSerial">{item.displaySerial}</span>
                        </div>

                        <div className="RecognitionPlateBody">
                            <div className="RecognitionGlyph">
                                <Image
                                    className={item.kind === "Certificate" ? "CertImg RecognitionImage" : "AwImg RecognitionImage"}
                                    src={item.image}
                                    alt={item.alt || item.title}
                                    loading="eager"
                                />
                            </div>

                            <div className="RecognitionCopy">
                                <h3>{item.title}</h3>
                                <p>{item.detail}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="RecognitionLedger">
                {ledger.map((item, index) => (
                    <article
                        key={`recognition-ledger-${item.title}`}
                        className="RecognitionLedgerItem animate-on-scroll"
                        data-anim="right"
                        style={{ "--ledger-track-width": item.trackWidth, "--reveal-delay": `${130 + index * 70}ms` }}
                    >
                        <span className="RecognitionLedgerIndex">{item.displaySerial}</span>
                        <div className="RecognitionLedgerTrack" aria-hidden="true"></div>
                        <div className="RecognitionLedgerCopy">
                            <h3>{item.title}</h3>
                            <p>{item.detail}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

function CredentialDeck({ items }) {
    return (
        <div className="CredentialDeck">
            {items.map((item, index) => (
                <article
                    key={`credential-${item.title}`}
                    className={`CredentialStrip strip-${index + 1} animate-on-scroll`}
                    data-anim={index % 2 === 0 ? "left" : "right"}
                    style={{ "--item-index": index, "--reveal-delay": `${100 + index * 90}ms` }}
                >
                    <span className="CredentialEdge" aria-hidden="true"></span>

                    <div className="CredentialId">
                        <span>{item.serial.padStart(2, "0")}</span>
                    </div>

                    <div className="CredentialMain">
                        <span className="CredentialKind">{item.kind}</span>
                        <h3>{item.title}</h3>
                        <p>{item.detail}</p>
                    </div>

                    <div className="CredentialSeal">
                        <Image className="CertImg CredentialImage" src={item.image} alt={item.title} loading="eager" />
                    </div>
                </article>
            ))}
        </div>
    );
}

export default function Home() {
    useStableReveal();

    return (
        <div suppressHydrationWarning>
            <div className="box InfoBox">
                <div className="Infoer">
                    <header className="InfoHero animate-on-scroll" data-anim="write">
                        <div className="InfoHeroCopy">
                            <span className="InfoEyebrow">Profile File</span>
                            <h1>INFO</h1>
                            <p className="InfoHeroLead">
                                AI developer, full-stack engineer, and creative technologist shaping digital products
                                with modern workflows, cleaner logic, and stronger visual direction.
                            </p>
                        </div>

                        <div className="InfoHeroMetrics">
                            {metrics.map((metric) => (
                                <div key={metric.label}>
                                    <strong>{metric.value}</strong>
                                    <span>{metric.label}</span>
                                </div>
                            ))}
                        </div>
                    </header>

                    <div className="InfoView">
                        <section className="InfoSection InfoBioSection">
                            <div className="InfoSectionHead animate-on-scroll" data-anim="left">
                                <span className="InfoSectionKicker">Background</span>
                                <h2>BIO</h2>
                            </div>

                            <div className="InfoSectionBody">
                                <p className="InfoBioLead animate-on-scroll" data-anim="left">
                                    A profile built around intelligence, interface quality, and visual control rather
                                    than disconnected skill lists.
                                </p>

                                <div className="InfoBio">
                                    {bioParagraphs.map((paragraph) => (
                                        <p key={paragraph} className="animate-on-scroll" data-anim="left">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="InfoSection InfoTimelineSection">
                            <div className="InfoSectionHead animate-on-scroll" data-anim="left">
                                <span className="InfoSectionKicker">Recognition</span>
                                <h2>AWARDS</h2>
                            </div>

                            <div className="InfoSectionBody">
                                <p className="InfoTimelineLead animate-on-scroll" data-anim="right">
                                    Awards are arranged along a single recognition rail so each result lands with a
                                    clear position, stronger rhythm, and a cleaner reading flow.
                                </p>
                                <RecognitionField items={awards} />
                            </div>
                        </section>

                        <section className="InfoSection InfoTimelineSection">
                            <div className="InfoSectionHead animate-on-scroll" data-anim="left">
                                <span className="InfoSectionKicker">Qualification</span>
                                <h2>CERTIFICATES</h2>
                            </div>

                            <div className="InfoSectionBody">
                                <p className="InfoTimelineLead animate-on-scroll" data-anim="right">
                                    Certificates follow the same signal rail, turning qualifications into a sharper
                                    sequence instead of a flat list of repeated cards.
                                </p>
                                <CredentialDeck items={certificates} />
                            </div>
                        </section>

                        <section className="InfoSection InfoContactSection">
                            <div className="InfoSectionHead animate-on-scroll" data-anim="left">
                                <span className="InfoSectionKicker">Reach Out</span>
                                <h2>CONTACT</h2>
                            </div>

                            <div className="InfoSectionBody">
                                <div className="ContactRail">
                                    {contacts.map((contact, index) => (
                                        <a
                                            key={contact.label}
                                            href={contact.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="ContactLink animate-on-scroll"
                                            data-anim={index % 2 === 0 ? "left" : "right"}
                                        >
                                            <Image className="CoImg" src={contact.image} alt={contact.alt} loading="eager" />
                                            <div className="ContactMeta">
                                                <span>{contact.label}</span>
                                                <strong>{contact.name}</strong>
                                            </div>
                                            <small>Open</small>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
