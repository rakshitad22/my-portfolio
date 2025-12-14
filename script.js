// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Loader
let count = 1;
const counter = document.getElementById("loading-count");
const circle = document.getElementById("progress-circle");
const loader = document.getElementById("loader");
const main = document.getElementById("main-content");
const circumference = 502;

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

// Theme toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "🌙" : "☀️";
});
