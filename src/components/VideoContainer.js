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
    console.log("data", data);
    if (data.status !== 200) {
      console.log("api me dikkat");
    } else {
      const json = await data.json();
      // console.log("youtube Api", json.items);
      setvideos(json.items);
      // console.log(videos);}
    }
  };

  return videos === undefined || videos?.length === 0 ? (
    "Loading"
  ) : (
    <div className=" flex flex-wrap justify-between m-2 p-2">
      {videos.map((info, index) => (
        <Link to={"watch?v=" + info.id}>
          <VideoCard video={info} key={index} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
