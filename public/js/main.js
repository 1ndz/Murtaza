// ...............animateBarsSmooth...............

const btn = document.getElementById('musicBtn');
const bars = btn?.querySelectorAll('.bar') ?? [];
const music = document.getElementById('music');

let playing = false;          // الحالة الحقيقية
let rafId = null;             // لمنع تعدد RAF
const baseH = 8;

const targetHeights = new Array(bars.length).fill(baseH);
const currentHeights = new Array(bars.length).fill(baseH);

function tick() {
    for (let i = 0; i < bars.length; i++) {
        if (Math.random() < 0.12) {
            targetHeights[i] = 4 + Math.random() * 16; // 4–20px
        }
        currentHeights[i] += (targetHeights[i] - currentHeights[i]) * 0.1;
        bars[i].style.height = currentHeights[i].toFixed(2) + 'px';
    }
    rafId = requestAnimationFrame(tick);
}

function startViz() {
    if (rafId == null) rafId = requestAnimationFrame(tick);
    btn?.classList.add('active');
    playing = true;
}

function stopViz() {
    if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }
    for (let i = 0; i < bars.length; i++) {
        targetHeights[i] = baseH;
        currentHeights[i] = baseH;
        if (bars[i]) bars[i].style.height = baseH + 'px';
    }
    btn?.classList.remove('active');
    playing = false;
}

async function tryAutoplayMuted() {
    try {
        // حيلة التشغيل الصامت المسموح به
        music.muted = true;
        await music.play();
        startViz();

        // إذا كان المتصفح يسمح بفكّ الميوت لاحقاً بدون gesture (بعض الكروميات)،
        // نخليه مثل ما هو. على iOS ما راح ينفك إلا بنقرة، وهذا طبيعي.
    } catch {
        // ممنوع التشغيل التلقائي: نجهّز أول تفاعل
        prepareGestureStart();
    }
}

function prepareGestureStart() {
    const onceStart = async () => {
        try {
            music.muted = false;
            await music.play();
            startViz();
        } catch {
            // إذا ظل يرفض، نخليه ميوت ونشغّل حتى يصير صوت بعد إذن المستخدم
            music.muted = true;
            await music.play().catch(() => { /* خلاص */ });
            startViz();
        }
    };
    window.addEventListener('pointerdown', onceStart, { once: true, passive: true });
    window.addEventListener('keydown', onceStart, { once: true });
}

// تشغيل/إيقاف بالزر
btn?.addEventListener('click', async (e) => {
    e.preventDefault();
    if (playing) {
        music.pause();
        stopViz();
    } else {
        try {
            // حاول نشغّل بصوت، إذا ما نفع رجّع ميوت
            music.muted = false;
            await music.play();
            startViz();
        } catch {
            music.muted = true;
            await music.play().catch(() => { });
            startViz();
            // وفكّ الميوت بأول تفاعل بعدين
            prepareGestureStart();
        }
    }
});

// تشغيل تلقائي عند التحميل (بالطريقة الآمنة)
window.addEventListener('load', tryAutoplayMuted);
