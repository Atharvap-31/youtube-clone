import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebar = useSelector((store) => store.app.isSidebar);

  // Early return
  if (!sidebar) return null;

  return (
    <div className="w-48 p-5 shadow-lg">
      <ul>
        <Link to="/">
          <li>Home </li>
        </Link>
        <li>Shorts</li>
        <li>Subrcription</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>
      <h1 className="font-bold pt-5">Subrcription</h1>
      <ul>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Podcast</li>
      </ul>
    </div>
  );
};

export default Sidebar;
