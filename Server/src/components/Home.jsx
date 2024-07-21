import React from "react";
import RightSideBar from "./RightSideBar";
import Feed from "./Feed";
import LeftSideBar from "./LeftSideBar";
const Home = () => {
  return (
    <div className="flex justify-between mx-auto w-[80%]  ">
      <LeftSideBar />
      <Feed />
      <RightSideBar />
    </div>
  );
};

export default Home;
