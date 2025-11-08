// ...............animateBarsSmooth...............


var btn = document.getElementById('musicBtn');
var bars = btn.querySelectorAll('.bar');
var music = document.getElementById('music');
let playing = true;
let targetHeights = new Array(bars.length).fill(8);
let currentHeights = new Array(bars.length).fill(8);
let animationFrame;

function animateBarsSmooth() {
    // نولد قيم جديدة أبطأ
    for (let i = 0; i < bars.length; i++) {
        // كل 10 فريمات غيّر الهدف بشكل بسيط
        if (Math.random() < 0.1) {
            targetHeights[i] = Math.random() * 14 + 4;
        }
        // تقرّب الارتفاع الحالي نحو الهدف بهدوء
        currentHeights[i] += (targetHeights[i] - currentHeights[i]) * 0.08;
        bars[i].style.height = `${currentHeights[i]}px`;
    }
    animationFrame = requestAnimationFrame(animateBarsSmooth);
}

function stopBars() {
    cancelAnimationFrame(animationFrame);
    bars.forEach((bar, i) => {
        targetHeights[i] = 8;
        currentHeights[i] = 8;
        bar.style.height = '8px';
    });
}

// التشغيل التلقائي عند تحميل الصفحة
window.addEventListener('load', async () => {
    try {
        await music.play();
        btn.classList.add('active');
        animateBarsSmooth();
    } catch {
        // بعض المتصفحات تمنع التشغيل التلقائي
        document.body.addEventListener('click', startMusic, { once: true });
        document.body.addEventListener('touchstart', startMusic, { once: true });
    }
});

function startMusic() {
    music.play();
    btn.classList.add('active');
    animateBarsSmooth();
    playing = true;
}

btn.addEventListener('click', () => {
    if (playing) {
        music.pause();
        btn.classList.remove('active');
        stopBars();
    } else {
        music.play();
        btn.classList.add('active');
        animateBarsSmooth();
    }
    playing = !playing;
});