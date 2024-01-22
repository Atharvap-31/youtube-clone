import React from "react";

const VideoCard = ({ video }) => {
  // console.log(video);

  if (!video) return null;
  const { snippet, statistics } = video;

  return (
    <div className="py-2 ml-10 mx-2 my-2 w-72 cursor-pointer">
      <img
        alt="thumbnail"
        className="rounded-lg"
        src={snippet.thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold p-2">{snippet.title}</li>
        <li className="px-4">{snippet.channelTitle}</li>
        <li className="px-4">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
