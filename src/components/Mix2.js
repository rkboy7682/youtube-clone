import React, { useRef } from "react";
import Child from "./Child";

const Mix2 = () => {
  const ref = useRef();
  console.log("ref", ref);
  return (
    <div>
      <Child ref={ref} />
      <button
        className="border-2 bg-red-400 m-2 p-2"
        onClick={() => ref.current.cbadhanewala()}
      >
        ParentButton
      </button>
    </div>
  );
};

export default Mix2;
