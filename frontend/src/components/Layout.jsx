import React from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="text-white border border-[#828181] rounded-lg my-3 mx-5 min-h-screen">
      <Nav />
      <div className="my-5 mx-8 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
