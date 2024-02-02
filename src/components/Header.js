import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(true);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSideBar());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getYoutubeSearch();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const getYoutubeSearch = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchInput);
    const json = await data.json();

    setSuggestions(json[1]);
  };

  return (
    <div className="grid grid-flow-col px-5 py-3 m-2 shadow-lg">
      <div className="flex col-span-1 items-center">
        <img
          onClick={handleToggle}
          className="h-7 justify-center cursor-pointer"
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
          alt="hamburger-menu"
        />
        <a href="/">
          <img
            className="h-6 ml-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU"
            alt="youtube-icon"
          />
        </a>
      </div>
      <div className="col-span-10 ml-40">
        <div>
          <input
            className="w-1/2 py-2 px-7 border border-gray-400 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="p-2 border border-gray-400 bg-gray-100 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute bg-white  w-[31rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-3 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
