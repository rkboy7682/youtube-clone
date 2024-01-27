import React, { useContext } from "react";
import UserContex from "./utils/UserContex";

const VideoCard = ({ video }) => {
  // console.log("video", video);
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
        {/* <li>{User.UserContex.Provider._context._currentValue}</li> */}
      </ul>
    </div>
  );
};

export default VideoCard;
