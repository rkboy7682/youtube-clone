import React, { useState } from "react";

const Demo2 = () => {
  const [y, sety] = useState(0);
  let x = 10;
  return (
    <div className="w-96 h-96 border-2 border-black">
      <button
        className="border-2 bg-green-600 m-2 p-2 w-16"
        onClick={() => {
          x = x + 1;
          console.log("X=", x);
        }}
      >
        Click
      </button>
      <h1 className="font-bold text-xl m-2 p-2">Let X:{x}</h1>

      <button
        className="border-2 bg-green-600 m-2 p-2 w-16"
        onClick={() => {
          sety(y + 1);
          console.log("Y=", y);
        }}
      >
        Click
      </button>
      <h1 className="font-bold text-xl m-2 p-2">Let Y:{y}</h1>
    </div>
  );
};

export default Demo2;
