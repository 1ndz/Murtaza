var canvas = document.getElementById('fx');
var ctx = canvas.getContext('2d', { alpha: true });
let W = 0, H = 0, DPR = Math.min(devicePixelRatio || 1, 2);

var PCOUNT = 800;
var STEP = 0.9;
var NOISE_SCALE = 0.0018;
var TRAIL = 0.09;
var SPEED_TILT = 0.75;
var SPEED_MOUSE = 0.6;

let particles = [];
let mouse = { x: 0, y: 0 };
let tilt = { x: 0, y: 0 };
let time = 0;

// Simplex Noise
var Simplex = (function () {
    var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
    var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
    var grad3 = new Float32Array([
        1, 1, -1, 1, 1, -1, -1, -1,
        1, 0, -1, 0, 1, 0, -1, 0,
        0, 1, 0, -1, 0, 1, 0, -1
    ]);
    var p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    let n, q;
    for (let i = 255; i > 0; i--) { n = Math.floor(Math.random() * (i + 1)); q = p[i]; p[i] = p[n]; p[n] = q; }
    var perm = new Uint8Array(512);
    var permMod12 = new Uint8Array(512);
    for (let i = 0; i < 512; i++) { perm[i] = p[i & 255]; permMod12[i] = perm[i] % 12; }

    function noise2D(xin, yin) {
        let n0 = 0, n1 = 0, n2 = 0;
        var s = (xin + yin) * F2;
        var i = Math.floor(xin + s), j = Math.floor(yin + s);
        var t = (i + j) * G2;
        var X0 = i - t, Y0 = j - t;
        var x0 = xin - X0, y0 = yin - Y0;
        let i1, j1; if (x0 > y0) { i1 = 1; j1 = 0; } else { i1 = 0; j1 = 1; }
        var x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
        var x2 = x0 - 1.0 + 2.0 * G2, y2 = y0 - 1.0 + 2.0 * G2;
        var ii = i & 255, jj = j & 255;
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
            var gi0 = permMod12[ii + perm[jj]] * 2;
            t0 *= t0; n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0);
        }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
            var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 2;
            t1 *= t1; n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
        }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
            var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 2;
            t2 *= t2; n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
        }
        return 70.0 * (n0 + n1 + n2);
    }
    return { noise2D };
})();

function resize() {
    W = canvas.width = Math.floor(innerWidth * DPR);
    H = canvas.height = Math.floor(innerHeight * DPR);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(DPR, DPR);
    initParticles();
}
addEventListener('resize', resize);

function initParticles() {
    particles.length = 0;
    for (let i = 0; i < PCOUNT; i++) {
        particles.push({
            x: Math.random() * innerWidth,
            y: Math.random() * innerHeight,
            vx: 0, vy: 0,
            life: Math.random() * 200 + 100,
            hue: 200 + Math.random() * 80
        });
    }
}

function lerp(a, b, t) { return a + (b - a) * t; }

function step() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = `rgba(0,0,0,${TRAIL})`;
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    ctx.globalCompositeOperation = 'lighter';
    time += 0.0025;

    var mx = (mouse.x / innerWidth - 0.5) * 2;
    var my = (mouse.y / innerHeight - 0.5) * 2;

    for (let i = 0; i < particles.length; i++) {
        var p = particles[i];
        var angle = Simplex.noise2D(p.x * NOISE_SCALE + time * 0.6, p.y * NOISE_SCALE - time * 0.6) * Math.PI;
        var mxPull = Math.atan2(my * 0.6, mx * 0.6 + 0.0001);
        var tiltPull = Math.atan2(tilt.y, tilt.x + 0.0001);
        var finalAngle = angle * 0.85 + mxPull * 0.1 + tiltPull * 0.05;
        var spd = STEP + Math.abs(Simplex.noise2D(p.x * 0.005, p.y * 0.005)) * 0.5 + Math.hypot(tilt.x, tilt.y) * SPEED_TILT;

        p.vx = lerp(p.vx, Math.cos(finalAngle) * spd, 0.25);
        p.vy = lerp(p.vy, Math.sin(finalAngle) * spd, 0.25);

        p.x += p.vx + mx * SPEED_MOUSE;
        p.y += p.vy + my * SPEED_MOUSE;

        if (p.x < -16) p.x = innerWidth + 16;
        if (p.x > innerWidth + 16) p.x = -16;
        if (p.y < -16) p.y = innerHeight + 16;
        if (p.y > innerHeight + 16) p.y = -16;

        var len = 1.2 + Math.hypot(p.vx, p.vy) * 1.2;
        var nx = p.x - p.vx * 2, ny = p.y - p.vy * 2;
        var hue = p.hue + finalAngle * 30;

        ctx.strokeStyle = `hsla(${hue}, 90%, 60%, .18)`;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - Math.cos(finalAngle) * len, p.y - Math.sin(finalAngle) * len);
        ctx.stroke();

        ctx.fillStyle = `hsla(${hue}, 95%, 65%, .45)`;
        ctx.beginPath();
        ctx.arc(nx, ny, 0.75, 0, Math.PI * 2);
        ctx.fill();

        if (--p.life <= 0) {
            p.x = Math.random() * innerWidth;
            p.y = Math.random() * innerHeight;
            p.vx = p.vy = 0;
            p.life = Math.random() * 200 + 100;
            p.hue = 200 + Math.random() * 80;
        }
    }

    // تأثير 3D خفيف حسب ميل الهاتف
    document.body.style.transform = `rotateX(${tilt.y * 10}deg) rotateY(${tilt.x * 10}deg) scale(1.02)`;
    requestAnimationFrame(step);
}

// الماوس
addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

// الجيروسكوب
function enableDeviceTilt() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then(state => {
            if (state === 'granted') {
                window.addEventListener('deviceorientation', onTilt, true);
            }
        }).catch(() => { });
    } else if (typeof DeviceOrientationEvent !== 'undefined') {
        window.addEventListener('deviceorientation', onTilt, true);
    }
}

function onTilt(ev) {
    tilt.x = Math.max(-1, Math.min(1, ev.gamma / 45));
    tilt.y = Math.max(-1, Math.min(1, ev.beta / 45));
}

addEventListener('touchend', enableDeviceTilt, { passive: true });
addEventListener('click', enableDeviceTilt);

resize();
requestAnimationFrame(step);
