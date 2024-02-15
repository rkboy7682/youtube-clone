import React, { useMemo } from "react";

//event bubbling
const Live = () => {
  return (
    <div
      className=" border-4 border-black w-96 h-96 m-2 p-2"
      onClick={() => {
        alert("hello grand");
      }}
    >
      grand
      <div
        className="border-4 border-red-500 w-80 h-80  m-2 p-2 "
        onClick={(e) => {
          // e.stopPropagation();

          alert("hello parent");
        }}
      >
        parent
        <div
          className="border-4 border-green-500 w-60 h-60 m-2 p-2"
          onClick={(e) => {
            // e.stopPropagation();

            alert("hello child");
          }}
        >
          {" "}
          Child{" "}
        </div>
      </div>
    </div>
  );
};

export default Live;
