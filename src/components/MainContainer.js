import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className=" w-11/12 my-2 mx-2 shadow-lg">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
