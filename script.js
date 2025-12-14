// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Loader animation
let count = 1;

const counter = document.getElementById("loading-count");
const bar = document.getElementById("progress-bar");
const loader = document.getElementById("loader");
const main = document.getElementById("main-content");

if (counter && bar && loader && main) {
  const interval = setInterval(() => {
    count++;
    counter.textContent = count;
    bar.style.width = count + "%";

    if (count >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.style.display = "none";
        main.style.display = "block";
      }, 300);
    }
  }, 25);
}
