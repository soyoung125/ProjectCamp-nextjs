const h1El = document.querySelector("h1");
h1El.innerHTML = "sucoding"; // 태그를 반영
h1El.innerText = "sucoding"; // 문자열반 변경

h1El.style.color = "red";
h1El.style.fontSize = "10px";

h1El.classList.add("active");
h1El.classList.remove("active");
h1El.classList.toggle("done"); // done 존재
h1El.classList.toggle("done"); // done 제거

console.log(h1El);

setTimeout(() => {
  const inputEl = document.querySelector("input");
  console.log(inputEl.value);
}, 4000);
