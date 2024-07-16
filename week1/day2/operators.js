// 1. 산술 연산자
const a = 10;
const b = 5;

const sum = a + b;
const minus = a - b;
const multiple = a * b;
const divide = a / b;
const remainder = a % b;

console.log("a + b =", sum);
console.log("a + b =", minus);
console.log("a * b =", multiple);
console.log("a / b =", divide);
console.log("a % b =", remainder);

// 2. 증감 연산자
let y = 7;
console.log(y++); // 7
console.log(y); // 8
console.log(y--); // 8
console.log(y); // 7
console.log(++y); // 8
console.log(--y); // 7

// 3. 대입 연산자
let z = 20;
console.log((z += 10));
console.log((z -= 5));
console.log((z /= 2));
console.log((z *= 3));

//4. 비교 연산자
const age1 = 25;
const age2 = 30;
console.log(age1 > age2);
console.log(age1 === age2);
console.log(age1 > age2 ? "Older" : "Younger or Same");

//5. 삼항 연산자
const num3 = -1;
console.log(num3 > 0 ? "Psitive" : num3 === 0 ? "Zero" : "Negative");
const a1 = 1,
  b1 = 4,
  c1 = 0;
console.log("max:", a1 > b1 ? (a1 > c1 ? a1 : c1) : b1 > c1 ? b1 : c1);
const num4 = 8;
console.log(`${num4} is`, num4 / 2 === 0 ? "even" : "odd");
const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome" : "Please log in");
const age = 11;
console.log(age >= 18 ? "Adult" : "Minor");

//6. 논리 연산자
const t = true;
const f = false;
console.log(t && f);
console.log(t || f);
console.log(!t);

const d = 1,
  e = 4,
  g = 10;
console.log(d > 10 && e < 5);
console.log(d > 10 || g > 3);

const isLoggedIn1 = true,
  isAdmin = false;
console.log(isLoggedIn1 && "Welcome");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isLoggedIn1 && isAdmin ? "Full access granted" : "Restricted access"
);

const value1 = 10,
  value2 = null;
console.log(!!value1 || !!value2); //value1 || value2 ? true : false
console.log(!(value1 && value2));

const num5 = 11;
console.log(num5 >= 0 && num5 <= 100);
console.log(num5 < 0 || num5 > 100);
