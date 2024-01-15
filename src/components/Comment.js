import React from "react";
import { FaRegUser } from "react-icons/fa";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  // console.log("data", replies);
  return (
    <div className="flex bg-gray-300 py-2 m-2 rounded-lg h-16">
      <div className="px-2 py-1">
        <FaRegUser />
      </div>
      <div>
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
        {/* <h1>{data.replies}</h1> */}
      </div>
    </div>
  );
};

export default Comment;
