import { useRoutes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ];
  return useRoutes(routes);
}

export default Router;
