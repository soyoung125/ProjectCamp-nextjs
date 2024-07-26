import { useContext } from "react";
import { CounterContext } from "../context/CountContext";

const UpdateButton = () => {
  console.log("update");
  const { setCount } = useContext(CounterContext);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>increase</button>
    </>
  );
};
export default UpdateButton;
