import { useState } from "react";

const ColorBox = () => {
  const [color, setColor] = useState("");

  return (
    <>
      <div className="item-middle">
        <div className="flex flex-col">
          <div
            className="w-40 h-40 border border-slate-500"
            style={{ backgroundColor: color }}
          ></div>
          <input
            type="text"
            className="border border-slate-500 w-40 mt-2"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default ColorBox;
