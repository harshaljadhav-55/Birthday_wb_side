// Popup function
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Confetti
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for (let i = 0; i < 150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 150 + 50,
        color: hsl(${Math.random()*360}, 100%, 50%),
        tilt: Math.random() * 10 - 10
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
        ctx.lineTo(c.x + c.tilt, c.y + c.r);
        ctx.lineTo(c.x + c.tilt - c.r / 2, c.y);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
        c.tilt += Math.sin(c.d);
        if (c.y > canvas.height) {
            c.y = -10;
            c.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(draw);
}

draw();