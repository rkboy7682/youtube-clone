import React, { useState } from "react";

const Demo = () => {
  const [Text, setText] = useState();
  console.log("rendering");
  return (
    <div className=" border-2 border-black-500 bg-slate-400 w-72 h-96 m-2 p-2">
      <input
        type="text"
        value={Text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </div>
  );
};

export default Demo;
