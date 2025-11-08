var canvas = document.getElementById('fx');
var ctx = canvas.getContext('2d', { alpha: true });

let DPR = Math.min(devicePixelRatio || 1, 2);
let W = 0, H = 0;

// تقليل عدد الجسيمات
const PCOUNT = 500;
const STEP = 0.8;
const NOISE_SCALE = 0.002;
const TRAIL = 0.08;
const SPEED_MOUSE = 0.5;

let particles = [];
let mouse = { x: 0, y: 0 };
let time = 0;

// نويز مبسط وسريع
function noise2D(x, y) {
    return (Math.sin(x * 0.01) + Math.cos(y * 0.01)) * 0.5;
}

function resize() {
    W = canvas.width = innerWidth * DPR;
    H = canvas.height = innerHeight * DPR;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(DPR, DPR);
    initParticles();
}

function initParticles() {
    particles = Array.from({ length: PCOUNT }, () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        vx: 0,
        vy: 0,
        hue: 200 + Math.random() * 80
    }));
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function step() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = `rgba(0,0,0,${TRAIL})`;
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    ctx.globalCompositeOperation = 'lighter';
    time += 0.003;

    const mx = (mouse.x / innerWidth - 0.5) * 2;
    const my = (mouse.y / innerHeight - 0.5) * 2;

    for (let p of particles) {
        const angle = noise2D(p.x * NOISE_SCALE + time, p.y * NOISE_SCALE - time) * Math.PI;
        const spd = STEP;
        p.vx = lerp(p.vx, Math.cos(angle) * spd, 0.2);
        p.vy = lerp(p.vy, Math.sin(angle) * spd, 0.2);

        p.x += p.vx + mx * SPEED_MOUSE;
        p.y += p.vy + my * SPEED_MOUSE;

        if (p.x < 0) p.x = innerWidth;
        if (p.x > innerWidth) p.x = 0;
        if (p.y < 0) p.y = innerHeight;
        if (p.y > innerHeight) p.y = 0;

        const hue = p.hue + angle * 30;
        ctx.strokeStyle = `hsla(${hue}, 90%, 60%, .15)`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 2, p.y - p.vy * 2);
        ctx.stroke();
    }

    requestAnimationFrame(step);
}

addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

addEventListener('resize', resize);
resize();
requestAnimationFrame(step);
