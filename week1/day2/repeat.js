// Q1
for (let i = 1; i < 10; i++) {
  console.log(i);
}

// Q2
let numArr = [10, -10, 20, -30, 40];
let sum = 0;
for (num of numArr) {
  if (num > 0) sum += num;
}
console.log(sum);

// Q3
for (let i = 0; i < 16; i++) {
  if (i % 2 === 0) console.log(`${i} 짝수`);
  else console.log(`${i} 홀수`);
}

// Q4
for (let i = 100; i < 1000; i++) {
  const hundred = Math.trunc(i / 100);
  const ten = Math.trunc((i / 10) % 10);
  const one = i % 10;

  if (i === hundred ** 3 + ten ** 3 + one ** 3) console.log(i);
}
