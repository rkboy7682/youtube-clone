import React, { useEffect, useState } from "react";
import { Api } from "./utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);
  const getVideo = async () => {
    const data = await fetch(Api);
    const json = await data.json();
    console.log("youtube Api", json.items);
    setvideos(json.items);
  };

  return (
    <div className=" flex flex-wrap justify-between m-2 p-2">
      {videos.map((info) => (
        <Link to={"watch?v=" + info.id}>
          <VideoCard video={info} key={info.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
