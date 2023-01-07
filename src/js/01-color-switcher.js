const body = document.querySelector("body");
const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let randomBodyColor = null
startButton.addEventListener("click", () => {
  randomBodyColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  },1000);
})
stopButton.addEventListener("click", () => {
  clearInterval(randomBodyColor);
})