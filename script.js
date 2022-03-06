let canvas = document.getElementById("snake-game-canvas");
let canvasContext = canvas.getContext("2d");
// let snakeDir = "down";
let snakeMoveX = 153;
let snakeMoveY = 225;
let snakeSpeed = 2;

setInterval(() => {
  drawCanvas();
  drawSnake();
  drawApple();
  moveSnake();
}, 500);

function drawCanvas() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
}

function drawSnake() {
  colorRect(snakeMoveX, snakeMoveY, 39, 21, "green");
}

function colorRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}

function drawApple() {
  colorCircle(150, 105, 7, "red");
}

function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, drawColor);
  canvasContext.fill();
}

function moveSnake() {
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowDown":
        snakeMoveY += snakeSpeed;
        console.log("DownWards");
        break;
      case "ArrowUp":
        snakeMoveY -= snakeSpeed;
        console.log("UpWards");
        break;
      case "ArrowRight":
        snakeMoveX += snakeSpeed;
        console.log("Right");
        break;
      case "ArrowLeft":
        snakeMoveX -= snakeSpeed;
        console.log("Left");
        break;
    }
  });
}































  //   if(snakeDir === "right"){
  //     snakeMoveX += snakeSpeedX;
  //   }
  //   if(snakeDir === "left"){
  //     snakeMoveX -= snakeSpeedX;
  //   }
  // if(snakeDir === "down"){
  //   snakeMoveY += snakeSpeedY;
  // }
  // if(snakeDir === "up"){
  //   snakeMoveY -= snakeSpeedY;
  // }


// function moveSnake() {
//   drawCanvas();
//   drawSnake();
//   drawApple();
//   document.addEventListener("keydown", (e) => {
// e.preventDefault();
// switch (e.key) {
//   case "ArrowRight":
//   snakeMoveX += snakeSpeedX;
//   console.log("snake is moving right");
//   // drawSnake();
//   break;
// }
//   case "ArrowRight":
//     snakeMoveX = snakeMoveX + snakeSpeedX;
//     console.log("right Direction!");
//     drawSnake();
//     console.log("SnakeX from DrawSnake: ", snakeMoveX);
//     break;

//   default:
//     console.log("did not work the logic");
//     break;
// }
//   });
// });
  // if (snakeDir === "right") {
  //   snakeMoveX = snakeMoveX + snakeSpeedX;
  //   console.log(snakeMoveX);
  // }
  // if (snakeDir === "down") {
  //   snakeMoveY = (snakeMoveY + snakeSpeedY);
  //   console.log(snakeMoveY);
  // }
  // if (snakeDir === "up") {
  //   snakeMoveY = (snakeMoveY - snakeSpeedY);
  //   console.log(snakeMoveY);
  // }
  // if (snakeDir === "left") {
  //   snakeMoveX = snakeMoveX - snakeSpeedX;
  //   console.log("SnakeMoveX: ", snakeMoveX);
  // }
  // });
  // //   // snakeMoveY = snakeMoveY + snakeSpeedY;
  // //   if (snakeMoveX > 710) {
  // //     snakeSpeedX = -snakeSpeedX;
  // //   }
  // //   // if (snakeMoveX < 0) {
  // //   //   snakeSpeedX = -snakeSpeedX;
  // //   // }
  // //   // if(snakeMoveY > 500){
  // //   //   snakeSpeedY = -snakeSpeedY;
  // //   // }
  // //   // if(snakeMoveY < 0){
  // //   //   snakeSpeedY = -snakeSpeedY;
  // //   // }
// }