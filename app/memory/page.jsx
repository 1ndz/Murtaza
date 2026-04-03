import "./memory.css";

export default function Home() {
    return (
        <div suppressHydrationWarning>
            <div className="box MemoryBox">
                <div className="Memoryer">
                    <div className="overlay MemoryOverlay">
                        <div className="hero animate-on-scroll" data-anim="left">
                            <h1>MEMORY</h1>
                            <p>MEMORY&nbsp;|&nbsp;HISTORY&nbsp;|&nbsp;THE PAST</p>
                        </div>
                    </div>

                    <div className="MemoryView">
                        <div className="m-card type-purple">
                            <div className="m-line"></div>
                            <div className="m-body">
                                <span className="m-title">Memory — 2024/11/15</span>
                                <p className="m-text">ذكرى معينة تحب تكتبها هنا بشكل بسيط وواضح.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
