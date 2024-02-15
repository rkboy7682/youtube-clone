import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { SearchApi } from "./utils/constant";
import { cacheResult } from "./utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuary, setSearchQuary] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setshowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuary]) {
        setSuggestion(searchCache[searchQuary]);
      } else {
        getSearchQuary();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuary]);

  const getSearchQuary = async () => {
    // console.log("Api call---" + searchQuary);

    const data = await fetch(SearchApi + searchQuary);
    const json = await data.json();
    // console.log(json);
    setSuggestion(json[1]);
    dispatch(
      cacheResult({
        [searchQuary]: json[1],
      })
    );
  };

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
        <div>
          <input
            className="border border-gray-500 p-2 w-1/2 rounded-l-full"
            type="text"
            value={searchQuary}
            onChange={(e) => setSearchQuary(e.target.value)}
            onFocus={() => setshowSuggestion(true)}
            onBlur={() => {
              setshowSuggestion(false);
            }}
          />
          <button className="border border-gray-500 p-3 m-1 rounded-r-full">
            <IoIosSearch className="h-4" />
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-5 w-[34rem] rounded-lg shadow-lg border-gray-600 border">
            <ul>
              {suggestion.map((S) => (
                <li className="  flex py-2 shadow-sm hover:bg-gray-200">
                  {" "}
                  <IoMdSearch /> {S}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
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
