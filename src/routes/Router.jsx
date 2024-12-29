import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Authentication/Login/Login";

import Register from "../pages/Authentication/Register/Register";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/menu";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Order from "../pages/Order/Order/Order";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order",
        element: <Order/>,
      },

      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
