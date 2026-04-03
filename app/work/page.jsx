"use client";

import Image from "next/image";
import Link from "next/link";
import "./work.css";
import useStableReveal from "../useStableReveal";
import moviesImg from "./img/movies.webp";

const storyboardMoments = [
    {
        serial: "01",
        kicker: "Code-first",
        type: "GitHub Projects",
        title: "Repository work needs clarity, not another generic card wall.",
        summary:
            "A cleaner lane for public repositories, utilities, AI experiments, and code stories that deserve context as much as links.",
        signature: "Commit trail",
        orbit: "Readable repos / stack notes / experiment logs",
        bullets: ["Repository links", "Tech stack notes", "Short code stories"],
        accent: "is-cyan",
        align: "is-left"
    },
    {
        serial: "02",
        kicker: "Live work",
        type: "Website Launches",
        title: "Shipped websites should feel like releases, not thumbnails trapped in a box.",
        summary:
            "Large previews, stronger captions, and more breathing room for branded launches, editorial surfaces, and responsive website work.",
        signature: "Launch lane",
        orbit: "Preview-led / narrative copy / public destination",
        bullets: ["Large previews", "Launch framing", "Responsive focus"],
        accent: "is-pink",
        align: "is-right"
    },
    {
        serial: "03",
        kicker: "Spatial",
        type: "3D Experiments",
        title: "3D needs atmosphere, depth, and motion cues even before a scene starts moving.",
        summary:
            "A dedicated motion-aware moment for spatial experiments, realtime studies, shader work, and dimensional prototypes.",
        signature: "Depth field",
        orbit: "Shaders / realtime / motion language",
        bullets: ["Scene concepts", "Realtime studies", "Motion-first framing"],
        accent: "is-amber",
        align: "is-left"
    }
];

const projectBoard = [
    {
        serial: "01",
        title: "Veria TV",
        type: "Website",
        mood: "Launch Surface",
        summary: "A modern movie and TV exploration surface with a cleaner visual rhythm and browsing flow.",
        tags: ["Next.js", "Streaming UI", "Responsive"],
        state: "Live case study",
        size: "is-wide",
        accent: "is-pink",
        primaryHref: "/work/movies",
        primaryLabel: "Open page",
        secondaryHref: "https://tv-v.netlify.app",
        secondaryLabel: "Visit live",
        visualLabel: "Featured launch"
    },
    {
        serial: "02",
        title: "Source Code Lane",
        type: "GitHub",
        mood: "Repository Index",
        summary: "A dedicated card for open-source repos, AI tools, helper scripts, and documented build notes.",
        tags: ["Open source", "Versioned", "Dev logs"],
        state: "Ready for repositories",
        size: "is-compact",
        accent: "is-cyan",
        visualLabel: "Commit driven"
    },
    {
        serial: "03",
        title: "3D Motion Lab",
        type: "3D",
        mood: "Spatial System",
        summary: "Built to present spatial prototypes, motion scenes, shader studies, and interactive objects.",
        tags: ["WebGL", "Motion", "Realtime"],
        state: "Ready for experiments",
        size: "is-tall",
        accent: "is-amber",
        visualLabel: "Depth + motion"
    },
    {
        serial: "04",
        title: "Website Systems",
        type: "Website",
        mood: "Interface Series",
        summary: "A secondary surface for editorial builds, landing pages, and design-heavy web launches.",
        tags: ["Landing pages", "Brand systems", "Performance"],
        state: "Next release slot",
        size: "is-compact",
        accent: "is-violet",
        visualLabel: "Launch ready"
    },
    {
        serial: "05",
        title: "Hybrid Builds",
        type: "Mixed",
        mood: "Cross-medium",
        summary: "For projects where code, visuals, sound, and narrative direction need one shared stage.",
        tags: ["AI", "Design", "Story"],
        state: "Cross-discipline",
        size: "is-wide",
        accent: "is-lime",
        visualLabel: "Code x visual"
    }
];

export default function Work() {
    useStableReveal();

    return (
        <div suppressHydrationWarning>
            <div className="box WorkBox">
                <div className="WorkScroll">
                    <header className="WorkHero animate-on-scroll" data-anim="write">
                        <span className="WorkEyebrow">Selected Work</span>
                        <h1>WORK</h1>
                        <p>Projects&nbsp;|&nbsp;Collaborations&nbsp;|&nbsp;Explorations</p>

                        <div className="HeroCurrentLine" aria-hidden="true">
                            <span>Archive 03</span>
                            <span>GitHub</span>
                            <span>Websites</span>
                            <span>3D</span>
                        </div>
                    </header>

                    <div className="WorkView">
                        <section className="LeadBand animate-on-scroll" data-anim="left">
                            <div className="LeadCopy">
                                <span className="SectionTag">Curated Storyboard</span>
                                <h2>Less dashboard. More sequence, rhythm, and stage presence.</h2>
                                <p>
                                    The page is rebuilt as a flowing work narrative instead of stacked boxes. GitHub,
                                    live websites, and 3D studies now sit in their own moments, while the numbered
                                    archive remains only at the end.
                                </p>
                            </div>

                            <div className="LeadTrace" aria-hidden="true">
                                <span></span>
                                <span></span>
                                <span></span>
                                <small>Code / Launch / Depth</small>
                            </div>

                            <div className="LeadAside">
                                <p>
                                    The opening area appears immediately, scroll feels lighter, and the supporting
                                    motion stays subtle enough that the work remains the focus.
                                </p>
                            </div>
                        </section>

                        <section className="FeatureBand animate-on-scroll" data-anim="left">
                            <div className="FeatureMedia">
                                <Image
                                    src={moviesImg}
                                    alt="Veria TV preview"
                                    className="FeatureImage"
                                    priority
                                    sizes="(max-width: 980px) 100vw, 56vw"
                                />
                                <span className="FeatureBadge">Featured launch</span>
                                <span className="FeatureCaption">Veria TV / editorial movie surface</span>
                            </div>

                            <div className="FeatureCopy">
                                <span className="SectionTag">Website Release</span>
                                <h3>Veria TV</h3>
                                <p>
                                    A flagship release moment for the strongest shipped website. It leads with image,
                                    mood, and entry clarity instead of flattening itself into another repeated panel.
                                </p>

                                <div className="FeatureList">
                                    <span>Visual browsing</span>
                                    <span>Movie catalog</span>
                                    <span>Launch-ready UI</span>
                                </div>

                                <div className="FeatureActions">
                                    <Link href="/work/movies" className="ActionLink primary">
                                        Open page
                                    </Link>
                                    <a
                                        href="https://tv-v.netlify.app"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="ActionLink secondary"
                                    >
                                        Visit live
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section className="Storyboard">
                            <div className="StoryboardAxis" aria-hidden="true"></div>

                            {storyboardMoments.map((moment, index) => (
                                <article
                                    key={moment.serial}
                                    className={`StoryboardMoment ${moment.align} ${moment.accent} animate-on-scroll`}
                                    data-anim={moment.align === "is-right" ? "right" : "left"}
                                    style={{ "--reveal-delay": `${80 + index * 90}ms` }}
                                >
                                    <div className="MomentMarker">
                                        <span>{moment.serial}</span>
                                        <small>{moment.kicker}</small>
                                    </div>

                                    <div className="MomentVisual" aria-hidden="true">
                                        <span className="MomentHalo"></span>
                                        <span className="MomentMesh"></span>
                                        <span className="MomentNode"></span>
                                    </div>

                                    <div className="MomentCopy">
                                        <span className="MomentType">{moment.type}</span>
                                        <h3>{moment.title}</h3>
                                        <p>{moment.summary}</p>

                                        <div className="MomentMeta">
                                            <span>{moment.signature}</span>
                                            <strong>{moment.orbit}</strong>
                                        </div>

                                        <ul className="MomentList">
                                            {moment.bullets.map((bullet) => (
                                                <li key={bullet}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            ))}
                        </section>

                        <section className="ArchiveSection">
                            <div className="ArchiveHeader animate-on-scroll" data-anim="left">
                                <span className="SectionTag">Project Index</span>
                                <h2>The numbered archive stays as the final index surface.</h2>
                                <p>
                                    This closing section keeps the sharper card logic for browsing multiple entries
                                    without turning the entire page into one long wall of containers.
                                </p>
                            </div>

                            <div className="ProjectGrid">
                                {projectBoard.map((project, index) => (
                                    <article
                                        key={project.title}
                                        className={`ProjectCard ${project.size} ${project.accent} animate-on-scroll`}
                                        data-anim={index % 2 === 0 ? "left" : "right"}
                                        style={{ "--reveal-delay": `${100 + index * 70}ms` }}
                                    >
                                        <div className="ProjectRail">
                                            <span className="ProjectSerial">{project.serial}</span>
                                            <span className="ProjectMood">{project.mood}</span>
                                        </div>

                                        <div className="ProjectVisual">
                                            <span className="VisualOrb" aria-hidden="true"></span>
                                            <span className="VisualGrid" aria-hidden="true"></span>

                                            <div className="VisualFooter">
                                                <span className="ProjectType">{project.type}</span>
                                                <span className="ProjectState">{project.visualLabel}</span>
                                            </div>
                                        </div>

                                        <div className="ProjectBody">
                                            <div className="ProjectHeader">
                                                <span className="ProjectStatus">{project.state}</span>
                                                <h3>{project.title}</h3>
                                            </div>

                                            <p>{project.summary}</p>

                                            <ul className="ProjectTags">
                                                {project.tags.map((tag) => (
                                                    <li key={tag}>{tag}</li>
                                                ))}
                                            </ul>

                                            <div className="ProjectActions">
                                                {project.primaryHref ? (
                                                    <Link href={project.primaryHref} className="InlineAction">
                                                        {project.primaryLabel}
                                                    </Link>
                                                ) : (
                                                    <span className="InlineAction ghost">Slot ready</span>
                                                )}

                                                {project.secondaryHref ? (
                                                    <a
                                                        href={project.secondaryHref}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="InlineAction ghost"
                                                    >
                                                        {project.secondaryLabel}
                                                    </a>
                                                ) : null}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
