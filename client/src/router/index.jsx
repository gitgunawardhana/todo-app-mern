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
          path: "/todo-app-mern",
          element: <Home />,
        },
        {
          path: "/todo-app-mern/profile",
          element: <Profile />,
        },
        {
          path: "/*",
          element: <Home />,
        },
      ],
    },
    {
      element: <PrivateRouteInverse />,
      children: [
        {
          path: "/todo-app-mern/login",
          element: <Login />,
        },
        {
          path: "/todo-app-mern/register",
          element: <Register />,
        },
        {
          path: "/*",
          element: <Login />,
        },
      ],
    },
    {
      path: "/todo-app-mern/about",
      element: <About />,
    },
  ];
  return useRoutes(routes);
}

export default Router;
