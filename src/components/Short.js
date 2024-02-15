import React from "react";

const Short = () => {
  const arr1 = [1, 2, 3, 4, 5, 6, 7]; //at
  const arr2 = [8, 9, 10, 11]; // concat
  const arr3 = ["rahul", "yadav", "age", "26"]; // entries

  const y = arr3.entries();
  for (const element of y) {
    console.log("entries", element);
  }
  const arr4 = [12, 8, 5, 130, 144]; //every

  const arr5 = [1, 23, 4, 5, 6]; //fill
  console.log(arr5.fill(2));

  const arr6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //filter
  const arr7 = [];
  const arr8 = [];

  arr6.filter((x) => (x % 2 == 0 ? arr7.push(x) : arr8.push(x)));
  console.log("sum", arr7);
  console.log("odd", arr8);

  // prime
  function isprime(x) {
    for (let i = 2; x > i; i++) {
      if (x % 2 === 0) {
        return false;
      }
    }
    return x > 1;
  }

  const arr9 = arr6.filter(isprime);
  console.log("prime", arr9);

  const arr10 = [4, 8, 12, 16, 20]; // find
  const arr11 = arr10.find((x) => x === 12);
  console.log("arr11 find value ", arr11);

  const arr12 = [4, 8, 12, 16, 20]; // findindex
  const arr13 = arr12.findIndex((x) => x > 2);
  console.log("arr13 findIndex number", arr13);

  const arr14 = [4, 8, 12, 16, 20]; // findLast
  const arr15 = arr14.findLast((x) => x > 10);
  console.log("arr15 findLastvalue", arr15);

  const arr16 = [4, 8, 12, 16, 20]; // foreach
  arr16.forEach((x) => console.log(x));

  const arr17 = [4, 8, 12, 16, 20]; // include
  console.log(arr17.includes(20));

  const arr18 = [4, 8, 12, 16, 20]; // key

  for (let x of arr18.keys()) {
    console.log("key", x);
  }

  const arr19 = [4, 8, 12, 16, 20]; // reduce
  const summ = arr19.reduce((acc, curr) => acc + curr);

  console.log(summ);

  const arr20 = [5, 6, 7, 3, 2, 1];

  const sort = arr20.sort((a, b) => {
    // debugger;
    return a - b;
  });
  console.log("sort", sort);
  return (
    <div>
      <h1>arr1.at method use:{arr1.at(2)}</h1>
      <h1>concatination : {arr1.concat(arr2).join(",")}</h1>
      <h1>copy within :{arr1.copyWithin(1, 3, 6).join(",")}</h1>
      <h1>entries :</h1>
      <h1>
        every method return boolean :{arr4.every((x) => console.log(x > 150))}
      </h1>
      <h1>fill method:{arr5.join(",")}</h1>
      <h1>filter</h1>
    </div>
  );
};

export default Short;
