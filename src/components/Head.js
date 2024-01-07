import React from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className=" h-10 p-3 flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandle()}
          className=" h-10 my-3 cursor-pointer "
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <img
          className="h-16 mx-8"
          alt="YouTubeLogo"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
      </div>

      <div className="col-span-10 m-4">
        <input
          className="border border-gray-500 p-2 w-1/2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-500 p-3 m-1 rounded-r-full">
          <IoIosSearch className="h-4" />
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-10 m-3"
          alt="userIcon"
          src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
