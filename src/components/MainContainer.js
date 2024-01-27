import React, { useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import UserContex from "./utils/UserContex";

const MainContainer = () => {
  const [user, setUser] = useState({ UserContex });
  console.log(user.UserContex.Provider._context._currentValue);
  return (
    <div className=" w-11/12 my-2 mx-2 shadow-lg">
      <ButtonList />
      <UserContex.Provider
        value={{ user: user.UserContex.Provider._context._currentValue }}
      >
        <VideoContainer />
      </UserContex.Provider>
    </div>
  );
};

export default MainContainer;
