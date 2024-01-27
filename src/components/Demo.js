import React, { useMemo, useState, useTransition } from "react";
import { MdDarkMode } from "react-icons/md";
import { main } from "./utils/constant";

const Demo = () => {
  const [Text, setText] = useState();
  // const [ispending, startTransition] = useTransition();
  const [isDark, setIsDark] = useState(false);
  console.log("rendering");

  const prime = useMemo(() => main(Text), [Text]);
  // const prime = useMemo(() => main(Text), [Text]);
  // const prime = startTransition(() => main(Text), [Text]);

  return (
    <div
      className={
        " border-2 border-black-500 bg-green-300 w-72 h-96 m-2 p-2 " +
        (isDark && "bg-red-600")
      }
    >
      <div>
        <button
          className="bg-gary-600 m-2 p-2 border-1 border-emerald-600"
          onClick={() => setIsDark(!isDark)}
        >
          <MdDarkMode />
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
