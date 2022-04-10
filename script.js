const DEBUG = false;

let gameInterval = 500;

let canvas = document.getElementById("snake-game-canvas");
let canvasContext = canvas.getContext("2d");
let snakeDirection = undefined;
let snakeSpeed = 25;
let incrementScore = 0;

let snakeBody = [
  { x: 125, y: 225 },
  { x: 100, y: 225 },
  { x: 75, y: 225 },
  // { x: 180, y: 240 },
  // { x: 150, y: 240 },
  // { x: 120, y: 240 }
];

let applePos = {
  appleX: randomNumber(650),
  appleY: randomNumber(450),
};

let dimOfSnakeAndApple = [21, 18];

function randomNumber(maxNum) {
  return Math.floor((Math.random() * maxNum) / snakeSpeed) * snakeSpeed;
}

if (DEBUG === true) {
  snakeDirection = "right";
  gameInterval = 2000;
  applePos.appleX = 225;
  applePos.appleY = 225;
}

const myInterval = setInterval(() => {
  gameCanvas();
  snakeEatsApple();
  drawSnakeBody(snakeBody);
  moveSnake(snakeBody);
  // snakeTouchItself();
}, gameInterval);

startGame();

function startGame(){
  document.addEventListener("keydown", (e) => {
    if(e.key === " "){
      snakeDirection = "right";
      alterSnakeDir(); 
    }
  });
}


function gameCanvas() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
  drawGridOnCanvas();
}

function drawGridOnCanvas() {
  for (let i = 0; i < canvas.width; i++) {
    for (let j = 0; j < canvas.height; j++) {
      let x = i * 25;
      let y = j * 25;
      colorRect(x, y, 21, 18, "green");
    }
  }
}

function drawSnakeBody(snakeBody) {
  for (let i = 0; i < snakeBody.length; i++) {
    drawSnake(snakeBody[i]);
  }
}

function drawSnake(snakeBody) {
  colorRect(
    snakeBody.x,
    snakeBody.y,
    dimOfSnakeAndApple[0],
    dimOfSnakeAndApple[1],
    "blue"
  );
}

function colorRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}

function drawApple() {
  colorRect(
    applePos.appleX,
    applePos.appleY,
    dimOfSnakeAndApple[0],
    dimOfSnakeAndApple[1],
    "red"
  );
}

function alterSnakeDir() {
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowDown":
        if (snakeDirection != "top") {
          snakeDirection = "down";
        }
        break;
      case "ArrowUp":
        if (snakeDirection != "down") {
          snakeDirection = "top";
        }
        break;
      case "ArrowRight":
        if (snakeDirection != "left") {
          snakeDirection = "right";
        }
        break;
      case "ArrowLeft":
        if (snakeDirection != "right") {
          snakeDirection = "left";
        }
        break;
    }
  });
}

function moveSnakeBody(copyOfSnakeBody) {
  for (let i = 1; i < snakeBody.length; i++) {
    snakeBody[i] = copyOfSnakeBody[i - 1];
  }
}

function moveSnake(snakeBody) {
  let copyOfSnakeBody = snakeBody.map((snakeBody) =>
    Object.assign([], snakeBody)
  );

  if (snakeDirection === "right") {
    let detect = boundaryDetection();
    if (!detect) {
      snakeBody[0].x += snakeSpeed;
      moveSnakeBody(copyOfSnakeBody);
      // console.log("Right: ", snakeBody[0].x);
      boundaryDetection();
      console.log("Right: ", snakeBody[0].x);
    }
  }
  if (snakeDirection === "left") {
    boundaryDetection();
    snakeBody[0].x -= snakeSpeed;
    moveSnakeBody(copyOfSnakeBody);
    console.log("Left: ", snakeBody[0].x);
  }
  if (snakeDirection === "top") {
    boundaryDetection();
    snakeBody[0].y -= snakeSpeed;
    moveSnakeBody(copyOfSnakeBody);
    console.log("Top: ", snakeBody[0].y);
  }
  if (snakeDirection === "down") {
    boundaryDetection();
    snakeBody[0].y += snakeSpeed;
    moveSnakeBody(copyOfSnakeBody);
    console.log("Down: ", snakeBody[0].y);
  }
  // boundaryDetection();
  snakeTouchItself();
}

//How snake will collide with applePos?
function snakeEatsApple() {
  if (
    snakeBody[0].x === applePos.appleX &&
    snakeBody[0].y === applePos.appleY
  ) {
    reGrowApple();
    growSnakeBody();
    displayScore();
  } else {
    drawApple();
  }
}

function reGrowApple() {
  for (let i = 0; i < snakeBody.length; i++) {
    if (
      applePos.appleX === snakeBody[i].x &&
      applePos.appleY === snakeBody[i].y
    ) {
      applePos.appleX = randomNumber(650);
      applePos.appleY = randomNumber(450);
      drawApple();
    }
  }
}

function displayScore() {
  let score = document.getElementById("score");
  incrementScore++;
  score.textContent = `# of apple eaten: ${incrementScore}`;
}

let borderCoordinate = {
  right: 750,
  left: 0,
  top: 0,
  bottom: 500,
};

let isSnakeHitTheWall = false;

function boundaryDetection() {
  if (
    snakeBody[0].x > borderCoordinate.right ||
    snakeBody[0].x < borderCoordinate.left ||
    snakeBody[0].y < borderCoordinate.top ||
    snakeBody[0].y > borderCoordinate.bottom
  ) {
    // clearInterval(myInterval);
    alert("You Hit the wall");
    clearInterval(myInterval);
    // resetSnakePos(snakeBody);
    // isSnakeHitTheWall = true;
  }
  // isSnakeHitTheWall = true;
}

function growSnakeBody() {
  let newSnakeBody;
  for (let i = snakeBody.length - 1; i < snakeBody.length; i++) {
    if (snakeDirection === "right" || snakeDirection === "left") {
      newSnakeBody = { x: snakeBody[i].x - snakeSpeed, y: snakeBody[i].y };
    }
    if (snakeDirection === "top" || snakeDirection === "down") {
      newSnakeBody = { x: snakeBody[i].x, y: snakeBody[i].y - snakeSpeed };
    }
  }
  snakeBody.push(newSnakeBody);
}

//Game Over: When Snake touch itself
function snakeTouchItself() {
  for (let i = 1; i < snakeBody.length; i++) {
    if (
      snakeBody[0].x === snakeBody[i].x &&
      snakeBody[0].y === snakeBody[i].y
    ) {
      clearInterval(myInterval);
      alert("oops, you ran into yourself!");
    }
  }
}

// function resetSnakePos(){
//   drawSnakeBody(snakeBody);
// }
