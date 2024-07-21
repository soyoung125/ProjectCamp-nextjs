{
  const num: number = 10;
  const str: string = "hello";
  const bool: boolean = true;
  const und: undefined = undefined;
  const nul: null = null;
}

{
  const obj: object = {};
  const arr: [] = [];
  const fun: Function = () => {};
}
{
  function add(a: number, b: number) {
    return a + b;
  }

  add(10, 20);
}

// 리터럴 타입
{
  let num: 10 | 20 = 10;
  num = 20; // 에러 없음
  let str: "A" = "A";
  let obj = {
    name: "kim" as const,
  };

  const printName = (name: "kim") => {
    console.log(name);
  };

  printName("kim");
  printName(obj.name); // 에러 발생
}

// 타입 오퍼레이터
{
  // union
  const arr: (number | string)[] = [1, "A", 3];

  // intersection
  const obj: { name: string } | { age: number } = {
    name: "kim",
    age: 20,
  };
}

// interface
{
  interface User {
    name: string;
    readonly age: number;
    height?: number;
  }
  interface User {
    gender: string;
  }

  interface Job extends User {
    title: string;
  }

  interface ISignature {
    [key: string]: string | number;
  }

  const user1: ISignature = {
    name: "kim",
    age: 20,
    gender: "male",
    height: 180,
    title: "developer",
  };

  const user2: User = {
    name: "kim",
    age: 20,
    gender: "male",
    height: 180,
  };

  type TRainbowColor =
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "violet";

  const phoneColor: TRainbowColor = "red";

  type TUseStatus = "Y" | "N";
  const useYn: TUseStatus = "Y";

  type TUser = {
    name: string;
  };
  const user3: TUser = {
    name: "kim",
  };

  type TJob = {
    title: string;
  };

  type TUserAndJob = TUser & TJob;
}

{
  type TUser = {
    name: string;
    age: number;
  };

  const user1: TUser = {
    name: "kim",
    age: 20,
  };

  function printUserName({ name, age }: TUser) {
    // 비구조 할당
    console.log(name);
  }

  printUserName(user1);
}

{
  // 제네릭
  // T가 매개변수나 반환값 타입에 들어갈 수 있음
  const firstElements = <T>(elements: T[]): T => {
    return elements[0];
  };
  console.log(firstElements<number>([1, 2, 3]));
  console.log(firstElements<string>(["a", "b", "c"]));
  console.log(firstElements<boolean>([true, false, true]));

  type TCar<T> = {
    name: string;
    option: T;
  };

  const car1: TCar<string> = {
    name: "sonata",
    option: "auto",
  };

  const car2: TCar<string[]> = {
    name: "sonata",
    option: ["auto", "sunroof"],
  };

  // 타입 제한
  const getLengths = <T extends { length: number }>(item: T): void =>
    console.log(item);
  getLengths([1, 2, 3]);
  getLengths(["a", "b", "c"]);
  getLengths("hello");
  // getLengths(0);
}
