const arr = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".button");
const info = document.querySelectorAll(".info");
const end = document.getElementById("end");
const gameResult = document.getElementById("gameResult");
const restart = document.getElementById("restart");
const result = document.getElementById("result");

let count = 0;
let userPoint = 0;
let computerPoint = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (count < 10) {
      const computerChoice = arr[Math.floor(Math.random() * arr.length)];
      const userChoice = button.getAttribute("choice");
      rockPaperScissors(computerChoice, userChoice);
      document.getElementById("times").innerHTML = "남은 횟수 : " + (9 - count);
      document.getElementById("userPoint").innerHTML = userPoint;
      document.getElementById("computerPoint").innerHTML = computerPoint;
      count++;
      if (count === 10) {
        info.forEach((item) => {
          item.style.display = "none";
        });
        buttons.forEach((button) => {
          button.style.display = "none";
        });
        result.style.display = "none";
        end.style.display = "flex";
        gameResult.style.display = "flex";
        restart.style.display = "flex";
        if (userPoint > computerPoint) {
          gameResult.style.color = "blue";
          gameResult.innerHTML = "게임에서 이겼습니다.";
        } else if (userPoint < computerPoint) {
          gameResult.style.color = "red";
          gameResult.innerHTML = "게임에서 졌습니다.";
        } else {
          gameResult.style.color = "black";
          gameResult.innerHTML = "게임에서 비겼습니다.";
        }
      }
    }
  });
});

restart.addEventListener("click", function () {
  end.style.display = "none";
  gameResult.style.display = "none";
  restart.style.display = "none";
  info.forEach((item) => {
    item.style.display = "flex";
  });
  buttons.forEach((button) => {
    button.style.display = "flex";
  });
  count = 0;
  userPoint = 0;
  computerPoint = 0;
  document.getElementById("userPoint").innerHTML = userPoint;
  document.getElementById("computerPoint").innerHTML = computerPoint;
});

function rockPaperScissors(computer, user) {
  result.style.display = "flex";
  if (computer === "rock") {
    if (user === "rock") {
      result.innerHTML = "무승부";
    } else if (user === "paper") {
      result.innerHTML = "플레이어 승리";
      userPoint++;
    } else {
      result.innerHTML = "컴퓨터 승리";
      computerPoint++;
    }
  } else if (computer === "paper") {
    if (user === "rock") {
      result.innerHTML = "컴퓨터 승리";
      computerPoint++;
    } else if (user === "paper") {
      result.innerHTML = "무승부";
    } else {
      result.innerHTML = "플레이어 승리";
      userPoint++;
    }
  } else {
    if (user === "rock") {
      result.innerHTML = "플레이어 승리";
      userPoint++;
    } else if (user === "paper") {
      result.innerHTML = "컴퓨터 승리";
      computerPoint++;
    } else {
      result.innerHTML = "무승부";
    }
  }
}
