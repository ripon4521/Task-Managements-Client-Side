import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home/Home";

import SignUp from "../Page/Login/SignUp";
import Login from "../Page/Login/Login";
import Dasboard from "../Layout/Dasboard";
import Layout from "../Dashboard/Layout";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },{
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },{
      path:'/dashboard',
      element:<Dasboard></Dasboard>,
      children:[
        {
          path:'/dashboard',
          element:<Layout></Layout>
        }
      ]
    }
  ]);