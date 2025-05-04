const lifeCount = document.getElementById("lives");
const scoreCount = document.getElementById("score");
const rgbInfo = document.getElementById("rgb");
const boxes = document.querySelectorAll(".boxes");
const alertDiv = document.querySelector(".alert-wrapper");
const alertDivP = document.querySelector(".alert-div p");

const roundInfoDiv = document.querySelector(".round-info-wrapper");
const roundInfoP = document.querySelector(".round-info-wrapper .round-info p");

function generateRandomRgbValue() {
  return Math.floor(Math.random() * 256);
}

function newGame() {
  const r = generateRandomRgbValue();
  const g = generateRandomRgbValue();
  const b = generateRandomRgbValue();
  const targetColor = `rgb(${r}, ${g}, ${b})`;
  rgbInfo.textContent = `(${r}, ${g}, ${b})`;

  const correctIndex = Math.floor(Math.random() * boxes.length);

  boxes.forEach((box, index) => {
    if (index === correctIndex) {
      box.style.backgroundColor = targetColor;
    } else {
      const wr = generateRandomRgbValue();
      const wg = generateRandomRgbValue();
      const wb = generateRandomRgbValue();
      box.style.backgroundColor = `rgb(${wr}, ${wg}, ${wb})`;
    }
  });
}

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    const clickedColor = getComputedStyle(box).backgroundColor.replace(
      /\s+/g,
      ""
    );
    const targetColor = `rgb${rgbInfo.textContent.replace(/\s+/g, "")}`;

    if (clickedColor === targetColor) {
      roundInfoDiv.style.display = "flex";
      roundInfoP.textContent = "Correct!";

      setTimeout(() => {
        roundInfoDiv.style.display = "none";
      }, 1000);
      scoreCount.textContent = +scoreCount.textContent + 1;
    } else {
      roundInfoDiv.style.display = "flex";
      roundInfoP.textContent = "Incorrect!";

      setTimeout(() => {
        roundInfoDiv.style.display = "none";
      }, 1000);
      lifeCount.textContent = +lifeCount.textContent - 1;

      if (+lifeCount.textContent === 0) {
        setTimeout(() => {
          alertDiv.style.display = "flex";
          alertDivP.textContent = "You lost! Try again!";
        }, 1100);
        return;
      }
    }

    if (+scoreCount.textContent === 20) {
        setTimeout(() => {
          alertDiv.style.display = "flex";
          alertDivP.textContent = "You Won!";
        }, 1100);

        return;
      }
    newGame();
  });
});

newGame();
