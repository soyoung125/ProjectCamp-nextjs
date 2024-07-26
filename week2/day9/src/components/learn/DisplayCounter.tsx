import { useContext } from "react";
import { CounterContext } from "../context/CountContext";

const DisplayCounter = () => {
  console.log("display");
  const { count } = useContext(CounterContext);

  return (
    <>
      <h1>Counter: {count}</h1>
    </>
  );
};
export default DisplayCounter;
