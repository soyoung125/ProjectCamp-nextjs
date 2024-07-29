import { useEffect, useState } from "react";

const A = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("A 컴포넌트 생성");

    return () => {
      console.log("A 컴포넌트 제거");
    };
  }, []);

  useEffect(() => {
    console.log("count 증가");
  }, [count]); // pagenation에 많이 쓰임

  return (
    <>
      <h1>A Component</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increase</button>
    </>
  );
};
export default A;
