// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Loader
let count = 1;
const circle = document.getElementById("circle");
const counter = document.getElementById("count");
const loader = document.getElementById("loader");
const main = document.getElementById("main");
const circumference = 440;

const interval = setInterval(() => {
  count++;
  counter.textContent = count;
  circle.style.strokeDashoffset =
    circumference - (count / 100) * circumference;

  if (count >= 100) {
    clearInterval(interval);
    loader.style.display = "none";
    main.classList.remove("hidden");
  }
}, 25);
