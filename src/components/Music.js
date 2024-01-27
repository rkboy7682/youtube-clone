import React from "react";

const Music = () => {
  const person = { fname: "John", lname: "Doe", age: 25 };

  let txt = "";
  for (let x in person) {
    txt += person[x] + " ";
  }

  // higher order function
  const arr = [3, 1, 2, 4];
  const area = (radi) => Math.PI * radi * radi;
  const cricumfrance = (radi) => 2 * Math.PI * radi;

  console.log("Area", arr.map(area));
  console.log("Circum", arr.map(cricumfrance));

  // currying

  function x(a) {
    return function y(b) {
      console.log("currying", a * b);
    };
  }

  x(5)(4);

  //map // filter// reduce
  const user = [
    { name: "Rahul", last: "yadav", age: 26 },
    { name: "suhani", last: "singh", age: 21 },
    { name: "jyoti", last: "yadav", age: 23 },
    { name: "jyotiya", last: "yadav", age: 23 },
  ];

  user.map((x) => console.log(x.name));

  const output = user.reduce((acc, curr) => {
    if (acc[curr.age]) {
      acc[curr.age] = ++acc[curr.age];
    } else {
      acc[curr.age] = 1;
    }
    return acc;
  }, {});

  console.log("outPut", output);

  // febonaci

  function fibonaci(n) {
    let a = 0;
    let b = 1;
    if (n === 0) {
      return a;
    }
    debugger;
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
      console.log("value", a);
    }
    return b;
  }
  const x12 = fibonaci(5);
  console.log(x12);

  return <div>Music</div>;
};

export default Music;
