import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";

const Cricate = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const n = array.length;
  const sum = array.reduce((ass, current) => ass + current, 0);
  console.log("sum", sum);

  const odd = array.filter((value) => value % 2 != 0);
  console.log("odd", odd);

  // const revArray = [1, 2, 3, 4, 5];
  // for (let i = 0; i <= revArray.length; i++) {
  //   const y = revArray[i] * 2;
  //   console.log(y);
  // }

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

  const max = [8, 3, 11, 5, 2];

  return (
    <div>
      <h1>Array of sum={sum}</h1>
      <h1>Finded odd={odd.join(",")}</h1>
      <h1>REMOVE_duplicate from array={removeduplic}</h1>
      <h1>Common:{common.join(",")}</h1>
    </div>
  );
};

export default Cricate;
