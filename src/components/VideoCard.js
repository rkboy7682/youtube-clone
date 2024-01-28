import React, { useContext } from "react";
import UserContex from "./utils/UserContex";

const VideoCard = ({ video }) => {
  // console.log("video", video);
  const user = useContext(UserContex);
  console.log("User", user.UserContex._currentValue2);
  const x = user.UserContex._currentValue2;
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
        <li>{x.name} </li>
        <li>{x.email}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
