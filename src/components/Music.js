import React from "react";

const Music = () => {
  const person = { fname: "John", lname: "Doe", age: 25 };
  debugger;
  let txt = "";
  for (let x in person) {
    txt += person[x] + " ";
  }

  return <div>Music</div>;
};

export default Music;
