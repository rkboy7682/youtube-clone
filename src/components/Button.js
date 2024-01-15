import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" m-2 w-28 p-2 font-semibold rounded-xl border border-gray-500 bg-gray-200">
        <Link to={name}>{name} </Link>
      </button>
    </div>
  );
};

export default Button;
