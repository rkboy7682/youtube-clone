import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";

const Cricate = () => {
  //Sum of array

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const n = array.length;
  const sum = array.reduce((ass, current) => ass + current, 0);
  console.log("sum", sum);

  // Find Odd
  const odd = array.filter((value) => value % 2 != 0);
  console.log("odd", odd);

  // Reversre array
  const rev = [1, 2, 3, 4, 5];
  const arr = [];
  rev.map((e) => {
    arr.unshift(e);
  });
  console.log("reverse", arr);

  // Common value and remove duplicate

  const duplicate = [1, 2, 2, 3, 4, 5, 5, 5, 6];
  const common = [];
  const removeduplic = [];
  duplicate.map((value) => {
    if (removeduplic.includes(value) == false) {
      removeduplic.push(value);
    } else {
      common.push(value);
    }
  });
  console.log("REMOVE_duplicate", removeduplic);
  console.log("Common ", common);

  // Find Max number in array

  const max = [8, 3, 11, 5, 2];

  const max1 = max.reduce((a, b) => Math.max(a, b));
  console.log("maximum", max1);

  // for in
  const person = { firstName: "Rahul", lastName: "Yadav", age: 26 };
  let value = "";
  for (let x in person) {
    console.log("x", x);
    value += person[x] + ",";
    // console.log("value", value);
  }
  console.log(value);

  // for of
  const person1 = ["firstName", "rahul", "yadav"];
  let tet = "";

  for (let [key, y] of person1.entries()) {
    console.log("y", y);
    console.log("key", key);

    tet = tet + y + ",";
  }
  console.log(tet);

  // for of entries
  const person2 = { 1: "firstName", 2: "rahul", 3: "yadav" };
  for (let z of Array.prototype.entries.call(person2)) {
    console.log("z", z);
  }

  // every

  const person3 = [1, 2, 3, 4, 5, 6];
  const Sum = (element) => element < 6;

  console.log(person3.every(Sum));

  return (
    <div>
      <h1>Array of sum={sum}</h1>
      <h1>Finded odd={odd.join(",")}</h1>
      <h1>REMOVE_duplicate from array={removeduplic}</h1>
      <h1>Common:{common.join(",")}</h1>
      <h1>Maximum:{max1}</h1>
      <h1>Reverse:{arr.join(",")}</h1>
    </div>
  );
};

export default Cricate;
