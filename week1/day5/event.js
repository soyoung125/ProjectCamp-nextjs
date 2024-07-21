// event
// find
const inputEl = document.querySelector("input");

// register
inputEl.addEventListener("keydown", function (ev) {
  console.log(this);
  console.log(ev);
  console.log("keydown");
  if (ev.key === "Enter") {
    alert("검색");
  }
});

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", function (ev) {
  console.log(this);
  console.log(ev);
  console.log("click");
});
