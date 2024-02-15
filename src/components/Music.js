import React from "react";

const Music = () => {
  const person = { fname: "John", lname: "Doe", age: 25 };

  let txt = "";
  for (let x in person) {
    console.log("valuess", x);
    txt += person[x] + " ";
  }
  console.log("txt", txt);

  // higher order function
  const arr = [3, 1, 2, 4];
  const area = (radi) => Math.PI * radi * radi;
  const cricumfrance = (radi) => 2 * Math.PI * radi;

  console.log("Area", arr.map(area));
  console.log("Circum", arr.map(cricumfrance));

  // higher oredr

  const arra = [5, 4, 6, 9];

  function area1(value) {
    return 2 * Math.PI * value;
  }
  console.log("curcrmfrance2", arra.map(area1));

  // currying

  function x(a) {
    return function y(b) {
      console.log("currying", a * b);
    };
  }

  x(5)(4);

  // currying

  function mul(a) {
    return function y(b) {
      return a * b;
    };
  }
  const z = mul(4);
  const dtat = z(5);
  console.log("mul", dtat);

  //map // filter// reduce
  const user = [
    { name: "Rahul", last: "yadav", age: 26 },
    { name: "suhani", last: "singh", age: 21 },
    { name: "jyoti", last: "yadav", age: 23 },
    { name: "jyotiya", last: "yadav", age: 23 },
  ];

  user.map((x) => console.log("name bhy map:", x.name));

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

    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
      console.log("value", a);
    }
    return b;
  }
  const x12 = fibonaci(10);
  console.log("fibonaci", x12);

  return <div>Music</div>;
};

export default Music;
