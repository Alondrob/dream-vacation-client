import React from "react";
import { Provider, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";


const PrivateRoutes = (props) => {
  const { children } = props;
  const userToken = useSelector((state) => state.user.token);
  const userLoggedIn = useSelector((state) => state.user.loggedIn);
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutes;
