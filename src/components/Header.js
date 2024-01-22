import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className="grid grid-flow-col px-5 py-3 m-2 shadow-lg">
      <div className="flex col-span-1 items-center ">
        <img
          onClick={handleToggle}
          className="h-7 justify-center cursor-pointer"
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
          alt="hamburger-menu"
        />
        <img
          className="h-6 ml-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU"
          alt="youtube-icon"
        />
      </div>
      <div className="col-span-10 ml-40">
        <input
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="p-2 border border-gray-400 bg-gray-100 rounded-r-full">
          Search
        </button>
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
