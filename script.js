let canvas = document.getElementById("snake-game-canvas");
let canvasContext = canvas.getContext("2d");
let moveSnake = 5;
// fillCanvas();
setInterval(drawSnake,1000);
drawSnake();
// drawApple();


// function fillCanvas(){
//   canvasContext.fillStyle = "black";
//   canvasContext.fillRect(0,0,canvas.width,canvas.height);
// } 

function drawSnake(){
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  moveSnake = moveSnake + 8;
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(moveSnake,250,29,19);
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

