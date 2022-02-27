let canvas = document.getElementById("snake-game-canvas");
let canvasContext = canvas.getContext("2d");
let snakeMove = 5;
let snakeSpeed = 13;
// fillCanvas();
setInterval(() => {
  moveSnake();
  drawSnake();
}, 100);
// drawSnake();
// drawApple();


// function fillCanvas(){
//   canvasContext.fillStyle = "black";
//   canvasContext.fillRect(0,0,canvas.width,canvas.height);
// } 

function moveSnake(){
  snakeMove = snakeMove + snakeSpeed;
  if(snakeMove > canvas.width){
    snakeSpeed = -snakeSpeed;
  }
  if(snakeMove < 0){
    snakeSpeed = -snakeSpeed;
  }
}

function drawSnake(){
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(snakeMove,250,29,19);
  canvasContext.fillStyle = "red";
  canvasContext.arc(150,105,5,0, 2*Math.PI);
  canvasContext.fill();
}

// function drawApple(){
//   canvasContext.fillStyle = "black";
//   canvasContext.fillRect(0,0,canvas.width,canvas.height);
//   canvasContext.fillStyle = "red";
//   canvasContext.arc(150,105,5,0, 2*Math.PI);
//   canvasContext.fill();
// }

