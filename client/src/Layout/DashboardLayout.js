import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="md:flex relative min-h-screen">
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 md:ml-64">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
