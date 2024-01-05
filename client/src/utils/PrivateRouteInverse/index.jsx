import { Navigate, Outlet } from "react-router-dom";

function PrivateRouteInverse() {
  const auth = { token: sessionStorage.getItem("access_token") };
  return !auth.token ? <Outlet /> : <Navigate to="/todo-app-mern" />;
}

export default PrivateRouteInverse;
