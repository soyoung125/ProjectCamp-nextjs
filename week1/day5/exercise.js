const countEl = document.querySelector("h1");
const increaseEl = document.querySelector(".increase");
// button:nth-of-type(1)
const decreaseEl = document.querySelector(".decrease");
// button:nth-of-type(2)

let i = 0;

increaseEl.addEventListener("click", () => {
  // const count = Number(countEl.innerText) + 1;
  // if (count > 10) return;
  // countEl.innerText = count;
  if (i < 10) countEl.innerText = ++i;
});

decreaseEl.addEventListener("click", () => {
  // const count = Number(countEl.innerText) - 1;
  // if (count < 0) return;
  // countEl.innerText = count;
  if (i > 0) countEl.innerText = --i;
});
