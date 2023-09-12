// selectors
const btnCalculate = document.querySelector(".calculate");
const btnToggleBg = document.querySelector(".toggle-bg");
const total = document.querySelector(".total");

const worker = new Worker("work.js");

btnCalculate.addEventListener("click", () => {
  total.textContent = 0;
  worker.postMessage("do count");

  worker.onmessage = (message) => {
    total.textContent = message.data;
  };
});

btnToggleBg.addEventListener("click", () => {
  document.body.classList.toggle("purple");
});
