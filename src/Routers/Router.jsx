import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home/Home";

import SignUp from "../Page/Login/SignUp";
import Login from "../Page/Login/Login";
import Dasboard from "../Layout/Dasboard";
import Layout from "../Dashboard/Layout";
import AllTask from "../Dashboard/AllTask/AllTask";
import Tarsh from "../Dashboard/Tarsh/Tarsh";
import Complete from "../Dashboard/Complete/Complete";
import Private from "../Private/Private";

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
          path:'Alltask',
          element:<Layout></Layout>
        },{
          path:'alltask',
          element:<AllTask></AllTask>
        },{
          path:'trash',
          element:<Tarsh></Tarsh>
        },
        {
          path:'complete',
          element:<Complete></Complete>,
         
        }
      ]
    }
  ]);