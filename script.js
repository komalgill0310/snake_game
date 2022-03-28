const DEBUG = true;

let gameInterval = 700;

let canvas = document.getElementById("snake-game-canvas");
let canvasContext = canvas.getContext("2d");
let snakeDir = undefined;
<<<<<<< Updated upstream
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

=======
let snakeSpeed = 27;

//created an array of object: Purpose to draw a snake on the Canvas
let snakeObj = [
  {x: 125, y:250},
  {x:  98, y:250},
  {x: 71, y:250}
];

let applePos = {
  appleX: 235,
  appleY: 141,
  radius: 12
};

if(DEBUG === true){
  snakeDir = "right";
  gameInterval = 1000;
  // applePos.appleX = 127;
  // applePos.appleY = 450;
  applePos.appleX = 235;
  applePos.appleY = 250;
}

const myInterval = setInterval(() => {
  drawCanvas();
  drawApple();
  drawSnakeArray(snakeObj);
  addSnakeSpeed(snakeObj);
  collision(snakeObj, applePos);
//  let isSnakeEatingApple = false;

//  isSnakeEatingApple = checkIfSnakeEatingApple();

//  if(isSnakeEatingApple){
//    alert("snake is eating apple");
//  }

}, gameInterval);

snake();

function drawSnakeArray(snakeObj) {
  for (let i = 0; i < snakeObj.length; i++) {
    drawSnake(snakeObj[i]);
  }
}

>>>>>>> Stashed changes
function drawCanvas() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
}

<<<<<<< Updated upstream
function drawSnake() {
  colorRect(snakeMoveX, snakeMoveY, 23, 21, "green");
=======
function drawSnake(snakeObj) {
 colorRect(snakeObj.x, snakeObj.y, 23, 21, "green");
>>>>>>> Stashed changes
}

function colorRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}

function drawApple() {
<<<<<<< Updated upstream
  let x = Math.floor(Math.random()*650 - Math.random()*15);
  let y = Math.floor(Math.random()*450 - Math.random()*15);
  colorCircle(x, y, 7, "red");
  console.log("x-axis: ", +x+ "& y-axis: ", +y)
  // Math.random(colorCircle(150, 105, 7, "red")) * canvas.width;
=======
  // colorCircle(applePos.appleX, applePos.appleY, applePos.radius, "red");
  colorRect(applePos.appleX, applePos.appleY, 23, 21, "red");
>>>>>>> Stashed changes
}

function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, drawColor);
  canvasContext.fill();
}

<<<<<<< Updated upstream
=======
//changing the direction for the snake
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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
=======
//Snake moves: first head then rest of the body moves
function addSnakeSpeed(snakeObj){
  let copyOfSnakeObj = snakeObj.map(snakeObj=>Object.assign([], snakeObj));

if(snakeDir === "right"){
  snakeObj[0].x += snakeSpeed;
  moveSnakeBody(copyOfSnakeObj);
  // collision(snakeObj, applePos);
  // endGameWhenSnakeTouchWall();
  // console.log("Right: ", snakeObj[0].x);
}
if(snakeDir === "left"){
  snakeObj[0].x -= snakeSpeed;
  moveSnakeBody(copyOfSnakeObj);
  // collision(snakeObj, applePos);
  // endGameWhenSnakeTouchWall();
  
  // console.log("Left: ", snakeObj[0].x);
}
if(snakeDir === "top"){
  snakeObj[0].y -= snakeSpeed;
  moveSnakeBody(copyOfSnakeObj);
  // collision(snakeObj, applePos);
  // endGameWhenSnakeTouchWall();
  // console.log("Top: ", snakeObj[0].y);
}
if(snakeDir === "down"){
  snakeObj[0].y += snakeSpeed;
  moveSnakeBody(copyOfSnakeObj);
  // collision(snakeObj, applePos);
  // endGameWhenSnakeTouchWall();
  // console.log("Down: ", snakeObj[0].y);
}
}

//How snake will collide with apple?
function collision(snakeObj, applePos){
  if((snakeObj[0].x+23)>=applePos.appleX+11.5){
    console.log("snake's eating applefrom right side");
>>>>>>> Stashed changes
  }
}


<<<<<<< Updated upstream
=======




























//How snake will collide with apple?
// function collision(snakeObj, applePos){
  // if(snakeObj[0].x < applePos.appleX){
  //   console.log("snake is in right direction");
  // }
  // if((snakeObj[0].x+23)>(applePos.appleX+23)){
  //   console.log("snake is in left direction");
  // }
  // if(snakeObj[0].y<(applePos.appleY+21)){
  //   console.log("apple is at the top of the head!");
  // }
  // if((snakeObj[0].y+21)>applePos.appleY){
  //   console.log("snake is going downwards!");
  // }

//check for overlap: if snake's direction is RIGHT
  // if((snakeObj[0].x+23)>=applePos.appleX+11.5){
  //   console.log("snake's eating applefrom right side");
  // }

  // if(((snakeObj[0].x + 23) >= applePos.appleX) &&
  //      snakeObj[0].x <= (applePos.appleX + 23) && 
  //      ((snakeObj[0].y + 21) >= applePos.appleY) && 
  //      snakeObj[0].y <= (applePos.appleY + 21)){
  //   console.log("snake touched apple");
  // }
// }


//Issue: after doing OK on alert, the snake still moves its head one time in that direction
// function endGameWhenSnakeTouchWall() {
//   if (snakeObj[0].x > 757) {
//     clearInterval(myInterval);
//     alert("Oops! you Hit the Right Wall");
//   }
//   if (snakeObj[0].y < -20) {
//     alert("Oops! you hit the top Wall");
//     clearInterval(myInterval);
//   }
//   if (snakeObj[0].y > 520) {
//     clearInterval(myInterval);
//     alert("Oops! you hit the bottom Wall");
//   }
//   if (snakeObj[0].x < -10) {
//     clearInterval(myInterval);
//     alert("Oops! you hit the left Wall");
//   }
// }































// snakeTouchApple();
// //snake Touch Apple
// function snakeTouchApple(){
//   if(snakeObj[0].y === applePos.appleY){
//     alert("snake touched apple");
//   }
// }


// function moveSnakeArray(snakeObj) {
  //   if(snakeDir){
  //   for (let i = 0; i < snakeObj.length; i++) {
  //     // if (i === 0) {//index zero is snake's head
  //       // addSnakeSpeed(snakeObj[i]);//it will keep running until the direction changes
  //       // addSnakeSpeed(snakeObj[i+1]);
        
  //       snakeObj[1] = snakeObj[0];
  //       addSnakeSpeed(snakeObj);
  
  //       console.log("i at firt time is: ", i);
  //     // }
  //     // if (i > 0) {
  //     //   i = i-1;
  //     //   console.log(snakeObj[i]);
  //     //   addSnakeSpeed(snakeObj[i]);
  //     //   console.log("i is greater than one");
  //     //   i++;
  //     //   console.log("i is: ", i);
  //     // }
  //     }
  //     // console.log("snakeDir is truthy value!");
  //   }
  // }

// function moveSnake() {
//   if (snakeDir === "right") {

//   }
//   if (snakeDir === "left") {
//     // snakePos.snakeMoveX -= snakePos.snakeSpeed;
//     // snakePos.centerX -= snakePos.snakeSpeed;

//     snakeObj.x -= snakeSpeed;

//     // endGameWhenSnakeTouchWall();
//     console.log("Left: ", snakeObj.x);
//   }
//   if (snakeDir === "top") {
//     // snakePos.snakeMoveY -= snakePos.snakeSpeed;
//     // snakePos.centerY -= snakePos.snakeSpeed;

//     snakeObj.y -= snakeSpeed;
  
//     // endGameWhenSnakeTouchWall();
//     console.log("UpWards: ", snakeObj.y);
//   }
//   if (snakeDir === "down") {
//     // snakePos.snakeMoveY += snakePos.snakeSpeed;
//     // snakePos.centerY -= snakePos.snakeSpeed;

//     snakeObj.y += snakeSpeed;

//     // endGameWhenSnakeTouchWall();
//     console.log("downWards: ", snakeObj.y);
//   }
// }

// function endGameWhenSnakeTouchWall() {
//   if (snakePos.snakeMoveX > 717) {
//     clearInterval(myInterval);
//     alert("Oops! you Hit the Right Wall");
//   }
//   if (snakePos.snakeMoveY < -1.5) {
//     clearInterval(myInterval);
//     alert("Oops! you hit the top Wall");
//   }
//   if (snakePos.snakeMoveY > 502.5) {
//     clearInterval(myInterval);
//     alert("Oops! you hit the bottom Wall");
//   }
//   if (snakePos.snakeMoveX < -3) {
//     clearInterval(myInterval);
//     alert("Oops! you hit the left Wall");
//   }
// }

// drawApple();

// function fillCanvas(){
//   canvasContext.fillStyle = "black";
//   canvasContext.fillRect(0,0,canvas.width,canvas.height);
// } 

// function drawSnake(){
//   canvasContext.fillStyle = "black";
//   canvasContext.fillRect(0,0,canvas.width,canvas.height);
//   moveSnake = moveSnake + 8;
//   canvasContext.fillStyle = "green";
//   canvasContext.fillRect(moveSnake,250,29,19);
//   canvasContext.fillStyle = "red";
//   canvasContext.arc(150,105,5,0, 2*Math.PI);
//   canvasContext.fill();
// }




// function drawApple(){
//   canvasContext.fillStyle = "black";
//   canvasContext.fillRect(0,0,canvas.width,canvas.height);
//   canvasContext.fillStyle = "red";
//   canvasContext.arc(150,105,5,0, 2*Math.PI);
//   canvasContext.fill();


// let snakeMoveX = 33;
// let snakeMoveY = (canvas.height) / 2;
// let snakeSpeed = 12;
// let appleX = 15;
// let appleY = 10;

// let snakePos = {
//   snakeSpeed: 12,
//   width: 21,
//   height: 20,
//   snakeMoveX: canvas.width / 4,
//   snakeMoveY: (canvas.height) / 2,
//   centerX: function(){
//     return this.snakeMoveX+this.width/2;
//   } ,
//   centerY: function(){
//     return this.snakeMoveY + this.height / 2;
//   }
// };

// console.table(snakePos);



//random apple generator code
// function drawApple() {
//   // let appleX = Math.floor(Math.random() * 650 - Math.random() * 15);
//   // let appleY = Math.floor(Math.random() * 450 - Math.random() * 15);
//   colorCircle(applePos.appleX, applePos.appleY, applePos.radius, "red");
//   // console.log("x-axis: ", +x+ "& y-axis: ", +y)
//   // Math.random(colorCircle(150, 105, 7, "red")) * canvas.width;
// }



// drawGrid();

// function drawGrid(){
//   let arr = [];
//   let color = "";
//   canvasContext.fillStyle = "green";
//   color = canvasContext.fillStyle;
//   console.log(color);
//   for(let x=0; x<5; x++){
//     for(let y=0; y<5; y++){   
// colorRect(x,y, 20,20,"white");
//       // arr[x][y] = color;
//       // console.log(arr[x][y]);
// // colorRect(x,y, 40,40, "green");
//     }
//     // canvasContext.beginPath();
//     // canvasContext.moveTo(0,0);
//     // canvasContext.lineTo(x,0);
//     // canvasContext.strokeStyle = "white";
//     // canvasContext.stroke();
//   }
//   // console.table(arr);
// }



// snakeTouchApple();

// let distance = Math.hypot((appleX-snakeMoveX)/2,(appleY-snakeMoveY)/2);
// console.log("distance: ", distance);

// if(distance < ((appleX-snakeMoveX)/2+(appleY-snakeMoveY)/2)){
//   console.log("distance is shorter than the radius");
// }

// function makeCopyOfSnake(){
//   let x = [];
//   for(let i=30; i<115; i+=24){
//     x.push(colorRect(i, snakePos.snakeMoveY, snakePos.width, snakePos.height, "green"));
//     // x.push(drawSnake());
//   }
// });






















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




>>>>>>> Stashed changes
// function rotateSnake(){
//   let i = drawSnake();
//   i.translate(54.5, 273);
//   i.rotate(Math.PI/2);
//   i.translate(-54.5, -273);
//   console.log("Rotation to the Top");
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
// }
