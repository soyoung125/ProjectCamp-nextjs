// 과제
// Q1
function getCountOfChar(str) {
  let char = str[0];
  let count = 0;
  let result = "";
  for (c of str) {
    if (c === char) {
      count += 1;
    } else {
      result = result + char + count;
      char = c;
      count = 1;
    }
  }
  return result + char + count;
}
const i = "aaabbbccc";
console.log(getCountOfChar(i));

const i2 = "aabbaa";
console.log(getCountOfChar(i2));

const i3 = "abbbffd";
console.log(getCountOfChar(i3));

// Q2
// 1.함수 선언식
function gugudan3() {
  for (let i = 1; i < 10; i++) {
    console.log(`3*${i}=${3 * i}`);
  }
}
gugudan3();

// 2.함수 표현식
// 2.1 익명 함수(unnamed function )
const gugudan4 = function () {
  let i = 1;
  while (i < 10) {
    console.log(`4*${i}=${4 * i}`);
    i++;
  }
};
gugudan4();

// 2.2 기명 함수(named function)
const gugudan5 = function ddd() {
  for (let i = 1; i < 10; i++) {
    console.log(`5*${i}=${5 * i}`);
  }
};
gugudan5();
