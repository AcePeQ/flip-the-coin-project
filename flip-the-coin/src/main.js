"use strict";

const spinButtons = [...document.querySelectorAll("#spinButton")];
const resultText = document.querySelector("#resultText");
const resultImage = document.querySelector("#resultPhoto");

function getTheSpinResult() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

function spinTheCoin() {
  const result = getTheSpinResult();

  resultText.textContent = result;
  resultImage.setAttribute("src", `/${result}.svg`);
}

spinButtons.forEach((button) => {
  button.addEventListener("click", spinTheCoin);
});
