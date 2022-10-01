import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Layout/Header";
import SideBar from "../../Layout/SideBar";

const Index = () => {
  return (
    <div className="grid area">
      <Header />
      <SideBar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
