const membershipCard = () => () => () => ({
  name: "수코딩 온라인 사이트",
  grade: "basic",
});

console.log(membershipCard()()());

// 연습문제
// Q1
const sum = (...args) => {
  let result = 0;
  for (let num of args) result += num;
  return result;
};

console.log(sum(1, 4));

// Q2
const calc = (a, operator, b) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      return "잘못된 수식입니다.";
  }
};

console.log(calc(10, "+", 3));

// Q3
const isEven = (number) => number % 2 === 0;
console.log(isEven(9) ? "Even" : "Odd");

// Q4
// const factorial = (number) => {
//   let result = 1;
//   for (let i = number; i > 1; i--) result *= i;
//   return result;
// };

// 재귀 함수
function factorial(n) {
  // 화살표 함수를 사용했을 때는 함수 선인이 종료되지 않아서 호출 자체가 안됐던게 아닐까 싶음
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

// 재귀 함수와 반복문 사용은 성능 차이가 크게 있지는 않음

// Q5
const triangleArea = (base, height) => (base * height) / 2;
console.log(triangleArea(10, 5));
