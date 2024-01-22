import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Computer Programming",
  "Podcast",
  "Thoughts",
  "News",
  "Comedy",
  "Watched",
  "News to you",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
