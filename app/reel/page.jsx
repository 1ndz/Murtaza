"use client";
import "./reel.css";
import useStableReveal from "../useStableReveal";

export default function Home() {
    useStableReveal();

    return (
        <div suppressHydrationWarning>
            <div className="box ReelBox">
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
