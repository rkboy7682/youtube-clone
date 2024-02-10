import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "./utils/store";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.name.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="borde w-48 shadow-md my-2">
      <h1 className="font-bold p-2 m-2">Home</h1>
      <ul className="m-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shorts">Shorts</Link>
        </li>
        <li>
          {" "}
          <Link to="/video">Video</Link>
        </li>
        <li>
          {" "}
          <Link to="/live">live</Link>
        </li>
      </ul>

      <h1 className="font-bold p-2 m-2">Subscription</h1>
      <ul className="m-2">
        <li>Music</li>
        <li>Sport</li>
        <li>Gamming</li>
        <li>Movies</li>
        <li>Others</li>
      </ul>

      <h1 className="font-bold p-2 m-2">Watch Later</h1>
      <ul className="m-2">
        <li>Music</li>
        <li>Sport</li>
        <li>Gamming</li>
        <li>Movies</li>
        <li>Others</li>
      </ul>
    </div>
  );
};

export default Sidebar;
