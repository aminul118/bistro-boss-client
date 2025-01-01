import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/menu";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Order from "../pages/Order/Order/Order";
import Login2 from "../pages/Authentication/Login/Login2";
import Register2 from "../pages/Authentication/Register/Register2";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Dashboard/Profile";

const Router = createBrowserRouter([
  {
    path: "login",
    element: <Login2 />,
  },
  {
    path: "register",
    element: <Register2 />,
  },
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
        path: "order/:category",
        element: <Order />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default Router;
