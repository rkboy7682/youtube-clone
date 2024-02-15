import React, { useRef } from "react";
import Popular from "./Popular";

const Mix = () => {
  const ref = useRef();
  console.log("ref", ref);
  return (
    <div>
      <Popular ref={ref} />

      <button
        className="border-2 bg-orange-500  m-2 p-2 w-32"
        onClick={() => ref.current.counter()}
      >
        ParentButton
      </button>
    </div>
  );
};

export default Mix;
