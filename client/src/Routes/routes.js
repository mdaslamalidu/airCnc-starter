import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Main from "../Layout/Main";
import ComingSoon from "../Pages/Shared/ComingSoon";
import Details from "../Pages/Details";
import SearchResult from "../Pages/SearchResult";
import Checkout from "../Pages/Checkout";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Welcome from "../Pages/Dashboard/Welcome";
import MyBooking from "../Pages/Dashboard/MyBooking";
import BecameAHost from "../Pages/Dashboard/BecameAHost";
import AllBookings from "../Pages/Dashboard/AllBookings";
import AllUsers from "../Pages/Dashboard/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon></ComingSoon>,
      },
      {
        path: "/service-details",
        element: <Details></Details>,
      },
      {
        path: "/search-form",
        element: <SearchResult></SearchResult>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Welcome></Welcome>,
      },
      {
        path: "/dashboard/mybookings",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "/dashboard/becameHost",
        element: <BecameAHost></BecameAHost>,
      },
      {
        path: "/dashboard/all-bookings",
        element: <AllBookings></AllBookings>,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
