function checkAnswer() {
  let correctAnswer = "4";
  let quiz = document.querySelector(".quiz");
  let userAnswer = quiz.value;
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done";
  } else {
    document.getElementById("feedback").textContent =
      "Thata incorrect. Try again!";
  }
}
let myButton = document.getElementById("submit-answer");

myButton.addEventListener("click", checkAnswer);
