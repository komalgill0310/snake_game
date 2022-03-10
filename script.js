let canvas = document.getElementById("snake-game-canvas");
let canvasContext = canvas.getContext("2d");
let snakeDir = undefined;
let snakeMoveX = 33;
let snakeMoveY = (canvas.height) / 2;
let snakeSpeed = 12;
// let snakeSpeedY = 12;

// snake();

const myInterval = setInterval(() => {
  drawCanvas();
  drawSnake();
  drawApple();
  moveSnake();
}, 500);

snake();

function drawCanvas() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
}

function drawSnake() {
  colorRect(snakeMoveX, snakeMoveY, 23, 21, "green");
}

function colorRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}

function drawApple() {
  let x = Math.floor(Math.random()*650 - Math.random()*15);
  let y = Math.floor(Math.random()*450 - Math.random()*15);
  colorCircle(x, y, 7, "red");
  console.log("x-axis: ", +x+ "& y-axis: ", +y)
  // Math.random(colorCircle(150, 105, 7, "red")) * canvas.width;
}

function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, drawColor);
  canvasContext.fill();
}

function snake() {
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowDown":
        snakeDir = "down";
        moveSnake();
        break;
      case "ArrowUp":
        snakeDir = "top";
        moveSnake();
        break;
      case "ArrowRight":
        snakeDir = "right";
        moveSnake();
        break;
      case "ArrowLeft":
        snakeDir = "left";
        moveSnake();
        break;
    }
  });
}

function moveSnake() {
  if (snakeDir === "right") {
    snakeMoveX += snakeSpeed;
    endGameWhenSnakeTouchWall();
    console.log("Right", snakeMoveX);
  }
  if (snakeDir === "left") {
    snakeMoveX -= snakeSpeed;
    endGameWhenSnakeTouchWall(); 
    console.log("Left: ", snakeMoveX);
  }
  if (snakeDir === "top") {
    snakeMoveY -= snakeSpeed;
    // rotateSnake();
    endGameWhenSnakeTouchWall();
    console.log("UpWards: ", snakeMoveY);
  }
  if (snakeDir === "down") {
    snakeMoveY += snakeSpeed;
    endGameWhenSnakeTouchWall(); 
    console.log("downWards: ", snakeMoveY);
  }
}

function endGameWhenSnakeTouchWall() {
  if (snakeMoveX > 717) {
    clearInterval(myInterval);
    alert("Oops! you Hit the Right Wall");    
  }
  if (snakeMoveY < -1.5) {
    clearInterval(myInterval);
    alert("Oops! you hit the top Wall");
  }
  if(snakeMoveY > 502.5){
    clearInterval(myInterval);
    alert("Oops! you hit the bottom Wall");
  }
  if(snakeMoveX < -3){
    clearInterval(myInterval);
    alert("Oops! you hit the left Wall");
  }
}


// function rotateSnake(){
//   let i = drawSnake();
//   i.translate(54.5, 273);
//   i.rotate(Math.PI/2);
//   i.translate(-54.5, -273);
//   console.log("Rotation to the Top");
// }
