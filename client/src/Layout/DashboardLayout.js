import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getuser } from "../api/user";
import Sidebar from "../Components/Dashboard/Sidebar";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../contexts/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getuser(user?.email).then((data) => {
      console.log(data.role);
      setRole(data.role);
      setLoading(false);
    });
  }, [user]);
  return (
    <div className="md:flex relative min-h-screen">
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <div>
            <Sidebar role={role}></Sidebar>
          </div>
          <div className="flex-1 md:ml-64">
            <div className="p-4">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
