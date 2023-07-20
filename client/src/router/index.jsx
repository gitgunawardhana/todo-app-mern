import { useRoutes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import PrivateRouteInverse from "../utils/PrivateRouteInverse";
import PrivateRoutes from "../utils/PrivateRoutes";

function Router() {
  const routes = [
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      element: <PrivateRouteInverse />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/about",
      element: <About />,
    },
  ];
  return useRoutes(routes);
}

export default Router;
