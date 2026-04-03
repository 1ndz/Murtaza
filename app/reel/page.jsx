import "./reel.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
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
