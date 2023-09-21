const buttonContainer = document.querySelector('.button-container')
const dayContainer = document.querySelector('.day-container')
const clickMe = document.querySelector('.click-me')

const canvas = document.getElementById('girasolCanvas');
const context = canvas.getContext('2d');
const canvasWidth = 300;
const canvasHeight = 600;
const flowerSize = 150;

function drawSunflower() {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    const flowerCenterX = centerX;
    const flowerCenterY = centerY;

    context.beginPath();
    context.moveTo(flowerCenterX, flowerCenterY);
    context.lineTo(flowerCenterX, flowerCenterY + flowerSize);
    context.lineWidth = 10;
    context.strokeStyle = '#228B22';
    context.stroke();

    context.fillStyle = '#FFD700';
    for (let i = 0; i < 16; i++) {
        const angle = (i * 360) / 16;
        const x = flowerCenterX + Math.cos((angle * Math.PI) / 180) * (flowerSize * 0.6);
        const y = flowerCenterY - flowerSize * 0.65 + Math.sin((angle * Math.PI) / 180) * (flowerSize * 0.6);
        context.beginPath();
        context.arc(x, y, flowerSize * 0.15, 0, Math.PI * 2);
        context.fill();
    }

    context.beginPath();
    context.arc(flowerCenterX, flowerCenterY - (flowerSize / 2) - 25, flowerSize * 0.4, 0, Math.PI * 2);
    context.fillStyle = '#3F2212';
    context.fill();
}

clickMe.addEventListener('click', () => {
    buttonContainer.classList.remove('active');
    dayContainer.classList.add('active');
    drawSunflower();
});