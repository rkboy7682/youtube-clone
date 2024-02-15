import React, { forwardRef, useState } from "react";
import { useImperativeHandle } from "react";

const Popular = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    counter,
  }));
  function counter() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1 className=" m-2 p-2">Count is:{count}</h1>
      <button
        className="border-2 bg-orange-500  m-2 p-2 w-32"
        onClick={counter}
      >
        ChildButton
      </button>
    </div>
  );
});

export default Popular;
