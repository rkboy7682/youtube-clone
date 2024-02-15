import { current } from "@reduxjs/toolkit";
import React from "react";

const Movie = () => {
  const arr = [
    { name: "John", age: 40 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 350 },
    { name: "Boby", age: 450 },
  ];
  const x = arr.map((e) => e.name + " " + e.age).sort();

  const compare = (a, b) => {
    // debugger;
    return a - b;
  };

  console.log("ager", arr.map((e) => e.age).sort(compare));

  const arr1 = [
    { type: "fruit", name: "apple" },
    { type: "fruit", name: "banana" },
    { type: "vegetable", name: "carrot" },
    { type: "cloths", name: "levies" },
  ];

  const fruit = [];
  const vegetable = [];

  arr1.map((e) => {
    if (e.type == "fruit") {
      fruit.push(e.name);
    } else {
      vegetable.push(e.name);
    }
  });

  const obj = { fruit: fruit, vegetable: vegetable };
  console.log("fruit", fruit._prototype);
  console.log("vegetable", vegetable);
  console.log(obj);

  const Input = [[1, 2], [3, 4, [5, 6]], 7];

  const sum_of_array = Input.flat(Infinity).reduce(
    (accu, current) => accu + current
  );
  console.log("sum", sum_of_array);

  const array1 = [
    { name: "John", age: 30, gender: "male" },
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 35, gender: "male" },
  ];
  const y = array1
    .map((e) => {
      if (e.age >= 30) {
        return e.name + "," + e.age + " " + e.gender;
      }
    })
    .join(" ");

  const object1 = { a: 100, b: 200, c: 300 };
  const object2 = { b: 2, c: 3, d: 4 };

  console.log("value", Object.values(object1));
  console.log("keys", Object.keys(object1));

  function objectIntersection(obj1, obj2) {
    const result = {};

    for (const key in obj1) {
      if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
        result[key] = obj1[key];
      }
    }

    return result;
  }

  return (
    <div>
      Movie
      <h1>sort:{x}</h1>
      <h1>{JSON.stringify(obj)}</h1>
      <h1>sum of array:{sum_of_array}</h1>
      <h1>filter:{y}</h1>
      <h1>{JSON.stringify(objectIntersection(object1, object2))}</h1>
    </div>
  );
};

export default Movie;
/*Array and Object Manipulation:

DONE

Flatten and Sort an Array of Objects:

Input: [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 35 }]
Expected Output: ['Alice', 25, 'Bob', 35, 'John', 30]



Grouping Objects by Property:

Input: [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }, { type: 'vegetable', name: 'carrot' }]
Expected Output: { fruit: ['apple', 'banana'], vegetable: ['carrot'] }


Sum of Nested Array Elements:

Input: [[1, 2], [3, 4, [5, 6]], 7]
Expected Output: 28
Filtering Objects by Multiple Conditions:

Input: [{ name: 'John', age: 30, gender: 'male' }, { name: 'Alice', age: 25, gender: 'female' }, { name: 'Bob', age: 35, gender: 'male' }], filter by age (>=30) and gender ('male')
Expected Output: [{ name: 'John', age: 30, gender: 'male' }, { name: 'Bob', age: 35, gender: 'male' }]

Object Intersection:
Input: { a: 1, b: 2, c: 3 } and { b: 2, c: 3, d: 4 }
Expected Output: { b: 2, c: 3 }
Rotate Array Elements to the Right:

Input: [1, 2, 3, 4, 5], rotate by 2 positions
Expected Output: [4, 5, 1, 2, 3]

Deep Clone an Object:

Input: { a: 1, b: { c: 2, d: { e: 3 } } }
Expected Output: A deep copy of the input object with no shared references.


Find the Union of Arrays of Objects:

Input: [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }] and [{ id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }]
Expected Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }]
These problems involve a mix of array and object manipulation, requiring a good understanding of both concepts. Feel free to tackle these challenges and let me know if you need hints or solutions!
*/
