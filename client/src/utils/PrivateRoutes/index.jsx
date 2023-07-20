import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const auth = { token: sessionStorage.getItem("access_token") };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
