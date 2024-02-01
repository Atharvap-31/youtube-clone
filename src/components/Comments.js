import React from "react";

const Comments = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex items-center shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-10 h-10"
        src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
        alt="user-icon"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
