let canvas = document.getElementById("snake-game-canvas");
let canvasContext = canvas.getContext("2d");

function fillCanvas(){
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
} 

function drawSnake(){
  canvasContext.fillStyle = "green";
  canvasContext.fillRect(350,250,29,19);
}

function drawApple(){
  canvasContext.fillStyle = "red";
  canvasContext.arc(150,105,5,0, 2*Math.PI);
  canvasContext.fill();
}

fillCanvas();
drawSnake();
drawApple();
