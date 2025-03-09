const next = document.getElementById("nextButton");
const quiz = document.getElementById("quiz");
const answerButton1 = document.getElementById("answerButton1");
const answerButton2 = document.getElementById("answerButton2");
const answerButton3 = document.getElementById("answerButton3");
const buttons = document.querySelectorAll(".button");
const quizNum1 = getRandomQuiz();
const quizNum2 = getRandomQuiz();
const answerNum1 = getRandomAnswer();
const answerNum2 = getRandomAnswer();

quiz.innerHTML = `${quizNum1} + ${quizNum2} = ?`;
answerButton1.innerHTML = answerNum1;
answerButton2.innerHTML = answerNum2;

const result = quizNum1 + quizNum2;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const answer = button.textContent;
    if (
      answer === "정답이 없습니다." &&
      result != answerNum1 &&
      result != answerNum2
    ) {
      buttons.forEach((button) => {
        button.style.backgroundColor = "red";
      });
      button.style.backgroundColor = "green";
      document.body.style.backgroundColor = "green";
      next.style.display = "flex";
    } else if (answer == result) {
      buttons.forEach((button) => {
        button.style.backgroundColor = "red";
      });
      button.style.backgroundColor = "green";
      document.body.style.backgroundColor = "green";
      next.style.display = "flex";
    } else {
      buttons.forEach((button) => {
        button.style.backgroundColor = "red";
      });
      document.body.style.backgroundColor = "red";
      buttons.forEach((button) => {
        let text = button.textContent;
        if (text == result) {
          button.style.backgroundColor = "green";
        }
      });
      if (
        answerButton1.style.backgroundColor == "red" &&
        answerButton2.style.backgroundColor == "red"
      ) {
        answerButton3.style.backgroundColor = "green";
      }
      next.style.display = "flex";
    }
  });
});

function reloadPage() {
  location.reload();
}

function getRandomAnswer() {
  return Math.floor(Math.random() * 10) + 1;
}

function getRandomQuiz() {
  return Math.floor(Math.random() * 5) + 1;
}
