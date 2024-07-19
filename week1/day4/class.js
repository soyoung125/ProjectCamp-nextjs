// es6 이전의 방식
// function Shape(color) {
//   this.color = color;
//   this.getColor = function () {
//     return this.color;
//   };
// }

// const shape1 = new Shape("red");
// console.log(shape1.color);
// console.log(shape1.getColor());

// function Retangle(color, width, height) {
//   Shape.call(this, color);
//   this.width = width;
//   this.height = height;
//   this.getArea = function () {
//     return this.width * this.height;
//   };
// }

// const rect1 = new Retangle("blue", 10, 10);
// console.log(rect1);
// console.log(rect1.getColor());

class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    // this 없이 선언 가능
    return `이 도형의 색상은 ${this.color}입니다.`;
  }
}

const shape1 = new Shape("red"); // 인스턴스 생성
console.log(shape1);

class Retangle extends Shape {
  // 상속
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rect1 = new Retangle("blue", 10, 10);
console.log(rect1.getColor());
console.log(rect1.getArea());

class Car {
  #name;

  constructor(name, speed) {
    this.#name = name;
    this.speed = speed;
  }

  set speed(speed) {
    if (speed < 0) {
      throw new Error("속도는 음수가 될 수 없습니다.");
    }
    this._speed = speed;
  }

  get speed() {
    return this._speed;
  }

  get name() {
    return this.#name;
  }

  getCarName() {
    return `차 이름은 ${this.name}입니다.`;
  }

  getSpeed() {
    return `현재 속도는 ${this.speed}입니다.`;
  }

  // 정적 메서드가 됨
  static getSpec() {
    return "차는 타이어 4개와 문 4개가 있습니다.";
  }
}

const car1 = new Car("벤츠", 100);
console.log(car1);
console.log(car1.getCarName());
console.log(car1.getSpeed());

class Mathutils {
  static PI = 3.1415;
  constructor() {}

  static add(a, b) {
    return a + b + 10;
  }

  static minus(a, b) {
    return a + b - 10;
  }
}

console.log(Mathutils.add(1, 4));
