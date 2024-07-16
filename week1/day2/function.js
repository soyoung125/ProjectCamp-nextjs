// 과제
// Q1
function getCountOfChar(str) {
  for (char of str) {
    console.log(char);
  }
}
const i = "aaabbbccc";
getCountOfChar(i);

const i2 = "aabbaa";
const o2 = "a2b2a2";

const i3 = "abbbffd";
const o3 = "a1b3f2d1";

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
  for (let i = 1; i < 10; i++) {
    console.log(`4*${i}=${4 * i}`);
  }
};
gugudan4();

// 2.2 기명 함수(named function)
// 101호 -> 김기수
// 카운터
const gugudan5 = function ddd() {
  for (let i = 1; i < 10; i++) {
    console.log(`5*${i}=${5 * i}`);
  }
};
gugudan5();
