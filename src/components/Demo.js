import React, { useMemo, useState } from "react";
import { main } from "./utils/constant";

const Demo = () => {
  const [Text, setText] = useState();
  const [isDark, setIsDark] = useState(false);
  console.log("rendering");

  const prime = useMemo(() => main(Text), [Text]);

  return (
    <div
      className={
        " border-2 border-black-500 bg-slate-400 w-72 h-96 m-2 p-2 " +
        (isDark && "bg-green-600")
      }
    >
      <div>
        <button
          className="bg-gary-600 m-2 p-2 border-2"
          onClick={() => setIsDark(!isDark)}
        >
          DarkTheam
        </button>
      </div>

      <input
        type="number"
        value={Text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <h1>n th prime:{prime}</h1>
    </div>
  );
};

export default Demo;
