let currentColor = 'black';
let drawing = false;
let lastX = 0;
let lastY = 0;

function setupCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');

  canvas.width = 620; // Establece el ancho del lienzo
  canvas.height = 325; // Establece el alto del lienzo

  canvas.addEventListener('mousedown', function (e) {
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
    drawing = true;
  });

  canvas.addEventListener('mouseup', () => (drawing = false));
  canvas.addEventListener('mouseout', () => (drawing = false));

  canvas.addEventListener('mousemove', function (e) {
    if (drawing) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      draw(ctx, lastX, lastY, x, y, currentColor);
      lastX = x;
      lastY = y;
    }
  });
}

function draw(ctx, x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

function changeColor(color) {
  currentColor = color;
}

function clearCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.onload = function () {
  setupCanvas('canvasNegocio');
  setupCanvas('canvasCasa');
};
