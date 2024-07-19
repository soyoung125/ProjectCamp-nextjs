// 생성자 함수 복습하기
const student = {
  name: "suconding",
  age: 20,
  gender: "male",
  // method
  introduce: function () {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  },
};

console.log(student.age); // 일반적인 방법
console.log(student["gender"]); // 문자열로 키값이 지정되는 경우 사용됨

// 그 외의 사용방법
for (let key in student) {
  // 키 값을 문자열로 반환함
  console.log(student[key]);
}

// 객체를 만드는 함수를 만들 수 있음 => 생성자 함수
// 함수 선언식으로 선언 -> 관례
// 함수 식별자의 첫 글자는 대문자

function Student(name, age, gender) {
  // this = {} 암묵적으로 실행되는 과정
  this.name = name;
  this.age = age;
  this.gender = gender;
  // return this
}

Student.prototype.indroduce = function () {
  return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
};

const student1 = new Student("suconding", 20, "male");
console.log(student1);
console.log(student1.__proto__ === Student.prototype); // true
console.log(Student.prototype.indroduce()); // undefined
console.log(student1.__proto__.indroduce()); //undefined
// 이때 introduce의 this가 프로토타입이 되기 때문에 undefined가 됨
console.log(student1.indroduce());
