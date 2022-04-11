const canvas = document.getElementById("snake-game-canvas");
let canvasContext = canvas.getContext("2d");

const GAME_INTERVAL = 100;
const SNAKE_SPEED = 25;
const DIM_OF_SNAKE_AND_APPLE = [21, 18];
const BORDER_COORDINATE = {
  right: 825,
  left: 0,
  top: 0,
  bottom: 700,
};

let myInterval;
let snakeDirection = undefined;
let incrementScore = 0;

let snakeBody = [
  { x: 125, y: 325 },
  { x: 100, y: 325 },
  { x: 75, y: 325 },
];

let applePos = {
  appleX: randomNumber(750),
  appleY: randomNumber(625),
};

startGame();
runEntireGame();
gameRestart();

function startGame() {
  document.getElementById("start-game").addEventListener("click", (e) => {
    e.preventDefault();
    snakeDirection = "right";
    alterSnakeDir();
  });
}

function runEntireGame() {
  myInterval = setInterval(() => {
    gameCanvas();
    snakeTouchItself();
    boundaryDetection();
    snakeEatsApple();
    drawSnakeBody(snakeBody);
    moveSnake(snakeBody);
  }, GAME_INTERVAL);
}

function gameRestart() {
  document.getElementById("restart-game").addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
  });
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

function gameCanvas() {
  colorRect(0, 0, canvas.width, canvas.height, "black");
}

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

function boundaryDetection() {
  if (
    snakeBody[0].x > BORDER_COORDINATE.right ||
    snakeBody[0].x < BORDER_COORDINATE.left ||
    snakeBody[0].y < BORDER_COORDINATE.top ||
    snakeBody[0].y > BORDER_COORDINATE.bottom
  ) {
    clearInterval(myInterval);
    alert("GAME OVER");
  }
}

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

function drawSnakeBody(snakeBody) {
  for (let i = 0; i < snakeBody.length; i++) {
    drawSnake(snakeBody[i]);
  }
}

function moveSnake(snakeBody) {
  let copyOfSnakeBody = snakeBody.map((snakeBody) =>
    Object.assign([], snakeBody)
  );

  if (snakeDirection === "right") {
    snakeBody[0].x += SNAKE_SPEED;
    moveSnakeBody(copyOfSnakeBody);
  }
  if (snakeDirection === "left") {
    snakeBody[0].x -= SNAKE_SPEED;
    moveSnakeBody(copyOfSnakeBody);
  }
  if (snakeDirection === "top") {
    snakeBody[0].y -= SNAKE_SPEED;
    moveSnakeBody(copyOfSnakeBody);
  }
  if (snakeDirection === "down") {
    snakeBody[0].y += SNAKE_SPEED;
    moveSnakeBody(copyOfSnakeBody);
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

function growSnakeBody() {
  let newSnakeBody;
  for (let i = snakeBody.length - 1; i < snakeBody.length; i++) {
    if (snakeDirection === "right" || snakeDirection === "left") {
      newSnakeBody = { x: snakeBody[i].x - SNAKE_SPEED, y: snakeBody[i].y };
    }
    if (snakeDirection === "top" || snakeDirection === "down") {
      newSnakeBody = { x: snakeBody[i].x, y: snakeBody[i].y - SNAKE_SPEED };
    }
  }
  snakeBody.push(newSnakeBody);
}

function displayScore() {
  let score = document.getElementById("score");
  incrementScore++;
  score.textContent = `Score: ${incrementScore}`;
}

function drawApple() {
  colorRect(
    applePos.appleX,
    applePos.appleY,
    DIM_OF_SNAKE_AND_APPLE[0],
    DIM_OF_SNAKE_AND_APPLE[1],
    "red"
  );
}

function drawSnake(snakeBody) {
  colorRect(
    snakeBody.x,
    snakeBody.y,
    DIM_OF_SNAKE_AND_APPLE[0],
    DIM_OF_SNAKE_AND_APPLE[1],
    "green"
  );
}

function moveSnakeBody(copyOfSnakeBody) {
  for (let i = 1; i < snakeBody.length; i++) {
    snakeBody[i] = copyOfSnakeBody[i - 1];
  }
}

function randomNumber(maxNum) {
  return Math.floor((Math.random() * maxNum) / SNAKE_SPEED) * SNAKE_SPEED;
}

function colorRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}
