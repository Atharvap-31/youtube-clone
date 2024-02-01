import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import CommentsContainer from "./CommentsContainer";

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
    <div className="p-5 mx-10">
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
      <div>
        {videoDetails.map((videoDetail) => (
          <h1
            className="text-gray-800 text-xl font-bold p-2"
            key={videoDetail.id}
          >
            {videoDetail.snippet.title}
          </h1>
        ))}
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
