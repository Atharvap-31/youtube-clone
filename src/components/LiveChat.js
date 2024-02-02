import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import generateRandomName, { genrateRandomString } from "../utils/helper";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: genrateRandomString(20) + "💪",
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(
      addMessages({
        name: "Atharva Patil",
        message: liveChat,
      })
    );
  };

  return (
    <>
      <div className="ml-2 p-2 border border-black rounded-lg w-[450px] h-[500px] overflow-y-scroll flex flex-col-reverse ">
        <div>
          {chatMessages.map((chat, i) => (
            <ChatMessage key={i} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={handleForm}
      >
        <input
          className="px-2 py-1 w-80"
          type="text"
          value={liveChat}
          onChange={(e) => setLiveChat(e.target.value)}
        />
        <button className="px-4 mx-6 py-1 bg-green-400 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
