// 연습 문제
const students = [
  { name: "Alice", age: 21, gender: "male", height: 170 },
  { name: "Bob", age: 19, gender: "male", height: 165 },
  { name: "Charlie", age: 20, gender: "male", height: 175 },
  { name: "David", age: 22, gender: "male", height: 180 },
  { name: "Eve", age: 17, gender: "female", height: 160 },
  { name: "Frank", age: 18, gender: "male", height: 175 },
  { name: "Grace", age: 21, gender: "female", height: 165 },
  { name: "Henry", age: 19, gender: "male", height: 170 },
  { name: "Ivy", age: 20, gender: "female", height: 155 },
  { name: "Jack", age: 22, gender: "male", height: 185 },
];

// 1. 키가 185인 학생 찾기
{
  console.log(students.find((s) => s.height === 185));
}

//2. 나이가 20살 이상인 학생들 찾기
{
  console.log(students.filter((s) => s.age >= 20));
}

//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
{
  console.log(students.some((s) => s.height <= 165));
}

//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
{
  console.log(students.every((s) => s.age >= 10));
}

//5. 학생들의 평균 연령 구하기
{
  const totalAge = students.reduce((acc, curr) => acc + curr.age, 0);
  const avgAge = totalAge / students.length;
  console.log(`평균 나이는 ${avgAge}세 입니다.`);
}

//6. 남학생들의 평균 연령 구하기
{
  const males = students.filter((s) => s.gender === "male");
  const totalAge = males.reduce((acc, curr) => acc + curr.age, 0);
  const avgAge = totalAge / males.length;
  console.log(`남학생 평균 나이는 ${avgAge}세 입니다.`);
}

//7. 야학생들만 따로 추출해서 새로운 배열 만들기
{
  const females = students.filter((s) => s.gender === "female");
  console.log(females);
}

//8. 여학생들 중 나이가 가장 어린 학생 찾기
{
  const females = students.filter((s) => s.gender === "female");
  const youngest = females.sort((a, b) => a.age - b.age)[0];
  console.log(youngest);
}
