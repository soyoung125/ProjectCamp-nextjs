import { TNameAndAge } from "../../../type";

const Greeting = (props: TNameAndAge) => {
  return (
    <>
      <h1>
        Hello, {props.uname}({props.age})
      </h1>
    </>
  );
};

export default Greeting;
