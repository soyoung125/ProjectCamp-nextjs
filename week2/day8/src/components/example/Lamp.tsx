import { useState } from "react";
import lampOn from "../../assets/images/b_on.png";
import lampOff from "../../assets/images/b_off.png";

const Lamp = () => {
  const [turnOn, setTurnOn] = useState(false);

  return (
    <>
      <img
        src={turnOn ? lampOn : lampOff}
        alt=""
        onClick={() => setTurnOn((prev) => !prev)}
      />
    </>
  );
};
export default Lamp;
