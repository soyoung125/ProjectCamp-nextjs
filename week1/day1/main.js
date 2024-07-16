function sum() {
  const x = 10,
    y = 20;
  const sum = x + y;
  console.log(sum);
}

function restore() {
  let name = "Alice";
  name = "Bob";
  console.log(name);
}

function constant() {
  const pi = 3.14;
  console.log(pi);
}

function swap() {
  let a = 5,
    b = 10;
  let temp;

  temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}

function main() {
  sum();
  restore();
  constant();
  swap();
}

main();
