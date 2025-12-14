// Loader animation
let count = 1;
const counter = document.getElementById("loading-count");
const bar = document.getElementById("progress-bar");
const loader = document.getElementById("loader");
const main = document.getElementById("main-content");

const interval = setInterval(() => {
  count++;
  counter.textContent = count;
  bar.style.width = count + "%";

  if (count >= 100) {
    clearInterval(interval);
    setTimeout(() => {
      loader.style.display = "none";
      main.style.display = "block";
    }, 400);
  }
}, 25);
