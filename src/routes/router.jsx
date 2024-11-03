
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:"/",
            element:<Home></Home>
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