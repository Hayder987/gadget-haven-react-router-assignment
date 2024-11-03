
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:"/",
            element:<Home></Home>,
            loader:()=> fetch('../categorys.json')
        },
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>
        },
        {
            path:"/statistic",
            element:<Statistics></Statistics>
        }
      ]
    }
])
export {router}