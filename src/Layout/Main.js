import React from "react";
import { Outlet } from "react-router-dom";
import ProfileCard from "../Pages/Home/Profile/ProfileCard/ProfileCard";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  ">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side w-72">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div>
            <ProfileCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
