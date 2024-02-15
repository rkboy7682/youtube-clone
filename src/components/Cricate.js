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

  // entries
  const arrrrr = [2, 3, 4, 8, 6, 52, 9];

  for (const element of arrrrr.entries()) {
    console.log("entries", element); //return array
  }

  // Find Max number in array

  const max = [8, 3, 11, 521, 2];

  const max1 = max.reduce((a, b) => Math.max(a, b));
  console.log("maximum", max1);

  // Find Min number in array

  console.log(
    "Minimum is:",
    max.reduce((a, b) => Math.min(a, b))
  );

  // for in
  const person = { firstName: "Rahul", lastName: "Yadav", age: 26 };
  let value = "";
  for (let x in person) {
    console.log("x", x);
    value += person[x] + ",";
    // console.log("value", value);
  }
  console.log("value is:", value);

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

  // fill method
  const person4 = [1, , 2, 3, 4, 5];
  console.log(person4.fill(6, 1, 4));

  // filter method prime number

  const prime = [2, 3, 4, 5, 6, 7, 8, 9];
  const p = [];
  prime.filter((e) => {
    if (e % 2 === 0 && e > 2) {
    } else {
      p.push(e);
    }
  });
  console.log("prime:", p);

  // find Non Zero element

  const person5 = [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }];
  const nonZer0 = [];
  const Zero = [];
  person5.filter((e) => {
    // console.log("person5", e);
    if (e.id <= 0) {
      Zero.push(e.id);
    } else {
      nonZer0.push(e.id);
    }
  });
  console.log("nonZer0", nonZer0);
  console.log("Zero", Zero);

  // Searching in array
  const fruits = ["apple", "banana", "grapes", "mango", "orange"];
  const y = "or";
  const filter = fruits.filter((e) => {
    return e.toLowerCase().includes(y.toLowerCase());
  }, y);
  console.log("filter:", filter);

  // find methd
  const person6 = [5, 130, 8, 130];
  console.log(
    "indedx",
    person6.findIndex((r) => r >= 130)
  );

  console.log(person6.find((e) => e === 130));

  const person7 = [
    { name: "rahul", age: 20 },
    { add: "gkp", age: 274702 },
  ];
  console.log(
    "age",
    person7.find((e) => e.age > 26)
  );

  // find last
  const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "fish", quantity: 1 },
    { name: "cherries", quantity: 5 },
  ];
  console.log(
    "last jo pahle mil gaya wahi de dega:",
    inventory.findLast((e) => e.quantity < 5)
  );

  // flat method

  const person8 = [1, 2, 3, [4, 5, 6, [7, [8]]]];
  console.log("flat:", person8.flat(Infinity));

  //flatMap
  const person9 = ["I am rahul yadav", ["shuhani singh"], "rajpoot"];
  const p1 = [];
  person9.flatMap((e) => {
    p1.push(e);
  });
  console.log("P1", p1);

  // remove negative and split odd number by 1

  const a = [5, 4, -3, 20, 17, -33, -4, 18];

  const x = a.flatMap((e) => (e < 0 ? 0 : e % 2 !== 0 ? [e - 1, 1] : e));

  console.log("asd", x);

  // for each

  const person10 = [5, 4, 20, 17, 18];
  person10.forEach((e) => console.log("for each:", e));

  // from
  const person11 = [5, 4, 20, 17, 18];
  const re = Array.from("rahul");
  console.log("Re", re);
  const uu = re.length;
  console.log("sds", uu);

  // includes

  const person12 = [5, 4, 20, 17, 18];
  const xc = person12.includes(17);
  console.log("include", xc);

  //inde of

  const person13 = [5, 4, 20, 18, 17];
  console.log("index of", person13.indexOf(17, 1));

  // isArray
  const person14 = [5, 4, 20, 18, 17];
  console.log(Array.isArray(person14));

  //join()
  const person15 = [5, 4, 20, 18, 17];
  console.log(person15.join("-"));

  // key()

  const person16 = [5, 4, 20, , 18, 17];
  const rahul = person16.keys();
  for (let x of rahul) {
    console.log("key", x);
  }

  //lastindexof
  const person17 = [5, 4, 8, 9, 10, 2, 9, 7, 0];
  console.log(person17.lastIndexOf(2, -2));

  //map
  const person18 = [7, 8, 9, 4, 5, 6, 2, 3];
  console.log(person18.map((e) => Math.sqrt(e)));

  const kvArray = [
    { key: 4, value: 10, age: 26 },
    { key: 5, value: 20, age: 27 },
    { key: 6, value: 30, age: 28 },
  ];
  console.log(
    "kvArray",
    kvArray.map(({ key, value, age }) => ({ [key]: value, age }))
  );

  const person19 = [7, 8, 9, 4, 5, 6, 2, 3];
  const ret = [];
  const per = person19.map((e, index) => {
    if (index > 4) {
      return ret.push(e);
    }
  });
  console.log("per", per);
  console.log("ret", ret);

  //push & pop
  const person20 = [7, 8, 9, 4, 5, 6, 2, 3];

  console.log("push", person20.push("rahul"));
  console.log(person20.pop());

  // reduce
  const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
  console.log(
    "sum",
    objects.reduce((acc, curr, index) => acc + curr.x, 0)
  );

  //reduceRight
  const person21 = [7, 8, 9, 4, 5, 6, 2, 3];
  console.log(
    "sum from right",
    person21.reduceRight((acc, curr, index) => acc + curr)
  );

  //reverse
  const person22 = [7, 8, 9, 4, 5, 6, 2, 3];

  console.log("revers", person22.reverse());

  // shift &&slice

  const person23 = [8, 9, 4, 5, 6, 2, 3];
  console.log("SHIFT VALUE", person23.shift());
  const person24 = [8, 9, 4, 5, 6, 2, 3];

  console.log("slice", person24.slice(1));

  //some
  const person25 = [8, 9, 4, 5, 6, 2, 3];
  console.log(person25.some((e) => e < 10));

  //sort
  const person26 = [8, 9, 4, 5, 6, 2, 3];
  console.log(
    "sort",
    person26.sort((a, b) => {
      // debugger;
      return a - b;
    })
  );

  const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];

  const yuy = items.sort((a, b) => {
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log("sorted string:", yuy);

  const person27 = ["rahul", "yadav", "shuhani", "Anil"];
  console.log(person27.sort((a, b) => a.localeCompare(b)));

  // splice

  const person28 = [8, 9, 4, 5, 6, 2, 3];
  person28.splice(0, 2, 10, 12);
  console.log(person28);

  //
  const arr1 = [
    "Hello world, how are you?",
    "I am doing great, thanks for asking.",
    "The weather is beautiful today.",
  ];
  const arr2 = arr1.flatMap((x) => x.split(" "));
  console.log("arr2", arr2);
  const max12 = Math.max(...arr2.map((e) => e.length));
  console.log("max12", arr2[max12]);

  // const arr2 =arr1.flatMap((x) =>x.split(" "));
  // console.log(arr2)
  // console.log("word length is :",arr2.length)

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
