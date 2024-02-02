import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  useEffect(() => {
    getVideoId();
  }, []);

  const getVideoId = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        searchParams.get("v") +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();

    setVideoDetails(json.items);
  };

  return (
    <div className="p-5 mx-5 ">
      <div className="flex w-[400px]">
        <div className="">
          <iframe
            className="rounded-xl"
            width="950"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <LiveChat />
        </div>
      </div>
      <div>
        {videoDetails.map((videoDetail) => (
          <div className="py-3" key={videoDetail.id}>
            <h1 className="text-gray-800 text-2xl font-bold p-2 w-[60rem] ">
              {videoDetail.snippet.title}
            </h1>
            <div className="flex items-center">
              <img
                className="w-8 h-8"
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                alt="user-icon"
              />
              <h2 className="text-gray-800 text-xl font-semibold p-2 ">
                {videoDetail.snippet.channelTitle}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
