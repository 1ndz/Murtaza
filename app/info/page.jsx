"use client";
import "./info.css";
import Image from "next/image";
import { useEffect } from "react";

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
            <div className="box InfoBox">
                <canvas id="fx"></canvas>

                <div className="Infoer">
                    <div className="overlay InfoOverlay">
                        <div className="hero animate-on-scroll" data-anim="up">
                            <h1>INFO</h1>
                            <p>CREATIVE&nbsp;|&nbsp;TECHNOLOGIST&nbsp;|&nbsp;DEVELOPER</p>
                        </div>
                    </div>

                    <div className="InfoView">
                        <div className="InfoBio">
                            <h2 className="animate-on-scroll" data-anim="left">- [BIO] -</h2>
                            <p className="animate-on-scroll" data-anim="left">Murtaza Al-Omran is a multidisciplinary AI Developer, Full-Stack Engineer, and Creative Technologist from southern Iraq, blending code, art, and cognition into seamless digital experiences. With over four years of professional experience, he builds systems where logic meets imagination — a synthesis of science and emotion translated through design and code.</p>
                            <p className="animate-on-scroll" data-anim="left"><a href="/work">Working</a> across artificial intelligence, web development, and digital media, Murtaza focuses on creating meaningful interactions powered by data-driven intelligence and visual storytelling. His work explores how neural networks and generative algorithms can become creative collaborators, rather than mere tools.</p>
                            <p className="animate-on-scroll" data-anim="left">As an AI Model Trainer, he develops and fine-tunes neural architectures for natural language processing, computer vision, and generative systems. His research often investigates the boundaries of creative automation — training models to think, react, and even “improvise” within aesthetic constraints. Using technologies such as TensorFlow, PyTorch, and OpenAI frameworks, he crafts models that blur the line between human intuition and machine precision.</p>
                            <p className="animate-on-scroll" data-anim="left">As a Full-Stack Web Developer, Murtaza builds immersive online environments using Next.js, React, Node.js, and Express, often incorporating real-time data and visual intelligence. His design philosophy combines performance, clarity, and emotional tone — ensuring that every line of code contributes to experience, not just function. Databases like MongoDB and PostgreSQL are part of his daily toolkit, along with scalable REST and GraphQL APIs.</p>
                            <p className="animate-on-scroll" data-anim="left">Murtaza’s creative background extends into 3D modeling, <a href="/art">pixel</a> art, and digital painting, where he experiments with color, motion, and depth to visualize algorithmic beauty. He also produces video content and visual compositions using Adobe Premiere, After Effects, and Photoshop, integrating generative visuals and post-production effects to merge film and data aesthetics.</p>
                            <p className="animate-on-scroll" data-anim="left">His multidisciplinary <a href="/work">skill's</a> set allows him to work across the full creative pipeline — from concept, design, and code to motion and sound. Whether it’s a self-learning interface, an AI-driven web experience, or a cinematic visualization, Murtaza aims to humanize the digital process. His approach emphasizes empathy, precision, and a fascination with the philosophical relationship between humans and intelligent systems.</p>
                            <p className="animate-on-scroll" data-anim="left">Beyond development, Murtaza writes and experiments with narrative structures — exploring how storytelling can be embedded within interactive environments. His creative identity bridges art and computation, finding harmony in their overlap.</p>
                            <p className="animate-on-scroll" data-anim="left">He has collaborated with various independent developers, digital artists, and early-stage startups, helping design data-driven interfaces and AI-enhanced products. Each project reflects his belief that technology should feel alive — intuitive, adaptive, and emotionally aware.</p>
                            <p className="animate-on-scroll" data-anim="left">Currently, Murtaza is working on several projects involving AI-assisted design, generative storytelling, and real-time visual systems, merging human creativity with algorithmic logic. His ultimate goal: to build a new generation of digital experiences where artificial intelligence isn’t an imitation of humanity, but an extension of it.</p>
                        </div>

                        <hr className="divider" />

                        <div className="InfoAwards">
                            <h2 className="animate-on-scroll" data-anim="left">- [Awards] -</h2>
                            <div className="BoxAwards">
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="AwImg" src={Img1} alt="Cannes Gold" loading="lazy" />
                                    <h3>Cannes Gold X2</h3>
                                </div>
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="AwImg" src={Img1} alt="Cannes Silver" loading="lazy" />
                                    <h3>Cannes Silver</h3>
                                </div>
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="AwImg" src={Img1} alt="Cannes Bronze" loading="lazy" />
                                    <h3>Cannes Bronze X4</h3>
                                </div>
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="AwImg" src={Img3} alt="Red Dot - DDS" loading="lazy" />
                                    <h3>Red Dot - DDS</h3>
                                </div>
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="AwImg" src={Img3} alt="Red Dot - Gran Prix X2" loading="lazy" />
                                    <h3>Red Dot - Gran Prix X2</h3>
                                </div>
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="AwImg" src={Img3} alt="Red Dot X5" loading="lazy" />
                                    <h3>Red Dot - X5</h3>
                                </div>
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="AwImg" src={Img4} alt="Gold Website - X2" loading="lazy" />
                                    <h3>Gold Website - X2</h3>
                                </div>
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="AwImg" src={Img5} alt="The Webby Website - X2" loading="lazy" />
                                    <h3>The Webby Website - X2</h3>
                                </div>
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="AwImg" src={Img6} alt="Craft Website Design Merit" loading="lazy" />
                                    <h3>Craft Website Design Merit</h3>
                                </div>
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="AwImg" src={Img2} alt="Cutting Edge of the Week" loading="lazy" />
                                    <h3>Cutting Edge of the Week</h3>
                                </div>
                            </div>
                        </div>

                        <hr className="divider" />

                        <div className="InfoCert">
                            <h2 className="animate-on-scroll" data-anim="left">- [Certificates] -</h2>
                            <div className="BoxCert">
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="CertImg" src={Img7} alt="" loading="lazy" />
                                    <h3>Deep Learning Engineer</h3>
                                </div>
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="CertImg" src={Img7} alt="" loading="lazy" />
                                    <h3>Machine Learning Engineer</h3>
                                </div>
                                <div className="animate-on-scroll" data-anim="right">
                                    <Image className="CertImg" src={Img7} alt="" loading="lazy" />
                                    <h3>Quantitative Analyst</h3>
                                </div>
                            </div>
                        </div>

                        <hr className="divider" />

                        <div className="InfoContact animate-on-scroll" data-anim="up">
                            <h2 className="animate-on-scroll" data-anim="left">- [Contact] -</h2>
                            <div className="BoxContact">
                                <a href="https://instagram.com/1nd.z">
                                    <div>
                                        <Image className="CoImg" src={i1} alt="instagram accout" loading="lazy" />
                                    </div>
                                </a>
                                <a href="https://t.me/c2_0r">
                                    <div>
                                        <Image className="CoImg" src={i2} alt="telegram account" loading="lazy" />
                                    </div>
                                </a>
                                <a href="https://tv-v.netlify.app">
                                    <div>
                                        <Image className="CoImg" src={i3} alt="veria website" loading="lazy" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
