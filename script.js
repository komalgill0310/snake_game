const DEBUG = true;

let gameInterval = 300;

let canvas = document.getElementById("snake-game-canvas");
let canvasContext = canvas.getContext("2d");
let snakeDir = undefined;
let snakeSpeed = 30;

//created an array of object: Purpose to draw a snake on the Canvas
let snakeObj = [
  { x: 180, y: 240 },
  { x: 150, y: 240 },
  { x: 120, y: 240 },
];

// console.log(snakeObj.length-1);
// console.log(snakeObj);

let apple = {
  appleX: randomNumber(650),
  appleY: randomNumber(450),
};
// console.log(apple);

function randomNumber(maxNum) {
  return Math.floor((Math.random() * maxNum) / 30) * 30;
}

if (DEBUG === true) {
  snakeDir = "right";
  gameInterval = 2000;
  apple.appleX = 270;
  apple.appleY = 240;
}

const myInterval = setInterval(() => {
  drawCanvas();
  // drawApple();
  collision();
  drawSnakeArray(snakeObj);
  addSnakeSpeed(snakeObj);
}, gameInterval);

snake();

function drawSnakeArray(snakeObj) {
  for (let i = 0; i < snakeObj.length; i++) {
    drawSnake(snakeObj[i]);
    // colorRect(snakeObj[i].x, snakeObj[i].y, 21, 18, "yellow");
  }
}

function drawCanvas() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
}

function drawSnake(snakeObj) {
  colorRect(snakeObj.x, snakeObj.y, 21, 18, "green");
}

function colorRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}

function drawApple() {
  // console.log("apple: ", apple);
  // colorCircle(apple.appleX, apple.appleY, 9, "red");
  colorRect(apple.appleX, apple.appleY, 21, 18, "red");
}

function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, drawColor);
  canvasContext.fill();
}

//changing the direction for the snake
function snake() {
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowDown":
        snakeDir = "down";
        break;
      case "ArrowUp":
        snakeDir = "top";
        break;
      case "ArrowRight":
        snakeDir = "right";
        break;
      case "ArrowLeft":
        snakeDir = "left";
        break;
    }
  });
}

function moveSnakeBody(copyOfSnakeObj) {
  for (let i = 1; i < snakeObj.length; i++) {
    snakeObj[i] = copyOfSnakeObj[i - 1];
  }
  // console.log("SnakeBody: ", snakeObj);
}
//Snake moves: first head then rest of the body moves
function addSnakeSpeed(snakeObj) {
  let copyOfSnakeObj = snakeObj.map((snakeObj) => Object.assign([], snakeObj));

  if (snakeDir === "right") {
    snakeObj[0].x += snakeSpeed;
    moveSnakeBody(copyOfSnakeObj);
    wallDetection();
    // console.log("Right: ", snakeObj[0].x);
  }
  if (snakeDir === "left") {
    snakeObj[0].x -= snakeSpeed;
    moveSnakeBody(copyOfSnakeObj);
    wallDetection();
    // console.log("Left: ", snakeObj[0].x);
  }
  if (snakeDir === "top") {
    snakeObj[0].y -= snakeSpeed;
    moveSnakeBody(copyOfSnakeObj);
    wallDetection();
    // console.log("Top: ", snakeObj[0].y);
  }
  if (snakeDir === "down") {
    snakeObj[0].y += snakeSpeed;
    moveSnakeBody(copyOfSnakeObj);
    wallDetection();
    // console.log("Down: ", snakeObj[0].y);
  }
}
let increment = 0;
//How snake will collide with apple?
function collision() {
  if (snakeObj[0].x === apple.appleX && snakeObj[0].y === apple.appleY) {
    apple.appleX = randomNumber(650);
    apple.appleY = randomNumber(450);
    if (apple.appleX != snakeObj[0].x && apple.appleY != snakeObj[0].y) {
      drawApple();
    }
    snakeGrow();
    console.log("snake ate apple!");
    increaseScore();
  } else {
    drawApple();
  }
}

function increaseScore() {
  let score = document.getElementById("score");
  increment++;
  score.textContent = increment;
}

//snake head comes into contact with a wall
function wallDetection() {
  if (
    snakeObj[0].x > 750 ||
    snakeObj[0].x < -30 ||
    snakeObj[0].y > 540 ||
    snakeObj[0].y < -30
  ) {
    clearInterval(myInterval);
    alert("You Hit the wall");
  }
}

//When Snake eat apple, add one rect block to the snake body
function snakeGrow() {
  let arr;
  for (let i = snakeObj.length - 1; i < snakeObj.length; i++) {
    if (snakeDir === "right" || snakeDir === "left") {
      arr = { x: snakeObj[i].x - snakeSpeed, y: snakeObj[i].y };
      console.log("snake Grow For loop: ", arr);
      // snakeObj.push(arr);
    }
    if (snakeDir === "top" || snakeDir === "down") {
      arr = { x: snakeObj[i].x, y: snakeObj[i].y - snakeSpeed };
      console.log("snake in moving along y-axis: ", arr);
    }
  }
  snakeObj.push(arr);
  // drawSnake(snakeObj);
  console.log(snakeObj);
}

















































      



























































































// function moveSnake() {
//   if (snakeDir === "right") {
//     snakeMoveX += snakeSpeed;
//     endGameWhenSnakeTouchWall();
//     console.log("Right", snakeMoveX);
//   }
//   if (snakeDir === "left") {
//     snakeMoveX -= snakeSpeed;
//     endGameWhenSnakeTouchWall();
//     console.log("Left: ", snakeMoveX);
//   }
//   if (snakeDir === "top") {
//     snakeMoveY -= snakeSpeed;
//     // rotateSnake();
//     endGameWhenSnakeTouchWall();
//     console.log("UpWards: ", snakeMoveY);
//   }
//   if (snakeDir === "down") {
//     snakeMoveY += snakeSpeed;
//     endGameWhenSnakeTouchWall();
//     console.log("downWards: ", snakeMoveY);
//   }
// }

//   if((snakeObj[0].x+23)===apple.appleX+11.5 &&
//     (snakeObj[0].x<=apple.appleX+23) &&
//     (snakeObj[0].y+21>=apple.appleY+10.5) )
//  {
// apple.appleX = randomNumber(650);
// apple.appleY = randomNumber(450);
// // console.log("collision: ", apple.appleX, apple.appleY);
// console.log(snakeObj[0]);
// drawApple();
//     }
//  if( (snakeObj[0].y+21>=apple.appleY) ||
//  (snakeObj[0].y<=apple.appleY+21)){
//   apple.appleX = randomNumber(650);
//   apple.appleY = randomNumber(450);
//   // console.log("collision: ", x, y);
//   drawApple();
//  }

// ||
// (snakeObj[0].x===apple.appleX) ||
// (snakeObj[0].x===apple.appleY+10.5) ||
// (snakeObj[0].x+21===apple.appleY))

// let x = Math.floor(Math.random()*650 - Math.random()*15);
// let y = Math.floor(Math.random()*450 - Math.random()*15);
// colorRect(x, y, 23, 21, "orange");

//     if(((snakeObj[0].x+23)>=apple.appleX+11.5)){
//       apple.appleX = randomNumber(650);
// apple.appleY = randomNumber(450);
//     drawApple();
//       console.log("snake's eating apple");
//     }
//     if((snakeObj[0].x<=apple.appleX)){
//       apple.appleX = randomNumber(650);
// apple.appleY = randomNumber(450);
//     drawApple();
//       console.log("snake's eating apple");
//     }
//     if(snakeObj[0].x<=apple.appleY+10.5) {
//       apple.appleX = randomNumber(650);
// apple.appleY = randomNumber(450);
//     drawApple();
//       console.log("snake's eating apple");
//       }    if(((snakeObj[0].x+23)>=apple.appleX+11.5)){
//       apple.appleX = randomNumber(650);
// apple.appleY = randomNumber(450);
//     drawApple();
//       console.log("snake's eating apple");

//   if((snakeObj[0].x+23)>=apple.appleX+11.5){
//     colorRect(apple.appleX, apple.appleY, 23, 21, "red");
//     console.log("AppleX: ", apple["appleX"]);
// console.log("AppleY: ", apple["appleY"]);
//     console.log("snake's eating apple from right side");
//   }
// if(snakeObj[0].x<=(apple.appleX+23)){
//   console.log("snake's eating apple from left side");
// }
// if(snakeObj[0])
// }

//How snake will collide with apple?
// function collision(snakeObj, apple){
// if(snakeObj[0].x < apple.appleX){
//   console.log("snake is in right direction");
// }
// if((snakeObj[0].x+23)>(apple.appleX+23)){
//   console.log("snake is in left direction");
// }
// if(snakeObj[0].y<(apple.appleY+21)){
//   console.log("apple is at the top of the head!");
// }
// if((snakeObj[0].y+21)>apple.appleY){
//   console.log("snake is going downwards!");
// }

//check for overlap: if snake's direction is RIGHT
// if((snakeObj[0].x+23)>=apple.appleX+11.5){
//   console.log("snake's eating applefrom right side");
// }

// if(((snakeObj[0].x + 23) >= apple.appleX) &&
//      snakeObj[0].x <= (apple.appleX + 23) &&
//      ((snakeObj[0].y + 21) >= apple.appleY) &&
//      snakeObj[0].y <= (apple.appleY + 21)){
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
//   if(snakeObj[0].y === apple.appleY){
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
//   colorCircle(apple.appleX, apple.appleY, apple.radius, "red");
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

// function rotateSnake(){
//   let i = drawSnake();
//   i.translate(54.5, 273);
//   i.rotate(Math.PI/2);
//   i.translate(-54.5, -273);
//   console.log("Rotation to the Top");
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
