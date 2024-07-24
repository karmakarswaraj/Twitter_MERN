import React from "react";
import RightSideBar from "./RightSideBar";
import Feed from "./Feed";
import LeftSideBar from "./LeftSideBar";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex justify-between mx-auto w-[80%]  ">
      <LeftSideBar />
      <Outlet/>
      <RightSideBar />
    </div>
  );
};

export default Home;
