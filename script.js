let canvas = document.getElementById("snake-game-canvas");
let canvasContext = canvas.getContext("2d");
let snakeMove = 5;
let snakeSpeed = 13;

setInterval(() => {
  moveSnake();
  drawCanvas();
  drawSnake();
  drawApple();
}, 100);

function moveSnake() {
  snakeMove = snakeMove + snakeSpeed;
  if (snakeMove > 710) {
    snakeSpeed = -snakeSpeed;
  }
  if (snakeMove < 0) {
    snakeSpeed = -snakeSpeed;
  }
}

function colorRect(leftX, leftY, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(leftX, leftY, width, height);
}

function drawCanvas() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
}

function drawSnake() {
  colorRect(snakeMove, 250, 29, 19, "green");
}

function drawApple() {
  canvasContext.fillStyle = "red";
  canvasContext.arc(150, 105, 5, 0, 2 * Math.PI);
  canvasContext.fill();
}




