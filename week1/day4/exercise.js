// [문제]
// 매개변수로 숫자를 전달하면 그 숫자의 역순을 되돌려주는
// 함수를 만들어주세요.

// ex) 32125 -> 52123
//     15231 -> 13251
function reverse_to_number(number) {
  const str = number.toString().split("");
  return str.reverse().join("");
}

let a = reverse_to_number(32125);
console.log(a); // 52123

let b = reverse_to_number(13251);
console.log(b); // 15231

/*
  [가장 긴 단어를 출력하기]

  매개변수로 전달된 문장에서 가장 긴 단어를 출력해주세요.
*/

function findLongStr(str) {
  const wordArr = str.split(" ");

  return wordArr.reduce((acc, curr) => (acc.length < curr.length ? curr : acc));
}

let result = findLongStr("we are the champion");
console.log(result); // champion

let result2 = findLongStr("i`m fine thank you, and you?");
console.log(result2); // thank
