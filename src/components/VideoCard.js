import React from "react";

const VideoCard = ({ video }) => {
  console.log("video", video);

  return (
    <div className="shadow-lg p-2 m-2 w-72">
      <img
        className="rounded-lg"
        alt="img"
        src={video?.snippet?.thumbnails?.high.url}
      />
      <ul>
        <li className="font-semibold">{video?.snippet?.title}</li>
        <li>{video?.snippet?.channelTitle}</li>
        <li>{video?.statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
