const area = "제주도";
let beaongbi = 0;

// switch (area) {
//   case "서울":
//     beaongbi = 3000;
//     break;
//   case "인천":
//     beaongbi = 3000;
//     break;
//   case "남양주":
//     beaongbi = 3000;
//     break;
//   case "경기도":
//     beaongbi = 3500;
//     break;
//   default:
//     beaongbi = 10000;
//     break;
// }

// 위의 swich 문을 if 문으로 변경
if (area === "서울" || area === "인천" || area === "남양주") {
  beaongbi = 3000;
} else if (area === "경기도") {
  beaongbi = 3500;
} else {
  beaongbi = 10000;
}

console.log(beaongbi);

const score = 90;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

const num = 9;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

const isLoggedIn = true;
const isAdmin = false;
if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, admin");
  } else {
    console.log("Access denied");
  }
} else {
  console.log("Please log in");
}

const a = 10,
  b = 4;
if (a > b) {
  console.log("a is greater");
} else if (a < b) {
  console.log("b is greater");
} else {
  console.log("a and b are equal");
}

const month = 11;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("fall");
    break;
}
