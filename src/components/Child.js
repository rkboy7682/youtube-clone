import React, { forwardRef, useImperativeHandle, useState } from "react";

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({ cbadhanewala: counter }));
  function counter() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Count is :{count}</h1>
      <button className="border-2 bg-red-400 m-2 p-2" onClick={counter}>
        ChildButton
      </button>
    </div>
  );
});

export default Child;
