import React from "react";

const Video = () => {
  // At
  const sentence = "The quick brown fox jumps over the lazy dog";
  const sentence1 = "hi this is rahul yadav.";
  console.log("At :", sentence.at(4));

  // .charAt
  console.log("CharAt :", sentence.charAt(5));

  // charCodeAt
  console.log("CharCodeAt:", sentence.charCodeAt(6));

  // codePointAt
  console.log("codePointAt:", sentence.codePointAt(8));

  //concat
  console.log("concat:", sentence.concat(sentence1));

  //endWith
  console.log("endWith:", sentence.endsWith("dog", 2));

  //fromCharCode

  console.log("fromcharCode:", String.fromCharCode(189, 43));

  // fromCodePoint

  console.log("fromCodePoint:", String.fromCodePoint(9731, 9733));

  // includes
  console.log("includes:", sentence.includes("dog"));

  // search
  const str = "hey JudE /";
  console.log(str.search("J"));

  const Input = { a: 1, b: 2, c: 3 };
  const Input01 = { b: 2, c: 3, d: 4 };
  for (let [key, value] of Object.entries(Input)) {
    console.log(key, value);
  }
  return <div>Video</div>;
};

export default Video;

/*  Object Intersection:
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
