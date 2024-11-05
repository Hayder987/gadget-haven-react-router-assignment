
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import ErrorPage from "../pages/ErrorPage";
import Details from "../pages/Details";
import Faqs from "../pages/Faqs";


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
            loader: ()=> fetch('../allProducts.json'),
            element:<Dashboard></Dashboard>
        },
        {
            path:"/statistic",
            element:<Statistics></Statistics>
        },
        {
          path:"/faqs",
          element:<Faqs></Faqs>
        },
        {
          path:"/post/:id",
          loader: ()=> fetch("../allProducts.json"),
          element:<Details></Details>
        }
      ]
    }
])
export {router}