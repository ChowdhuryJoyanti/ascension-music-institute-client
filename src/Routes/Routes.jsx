import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
// import AllClasses from "../Pages/AllClasses/AllClasses";
import AllClasses from "../Pages/AllClasse/AllClasses/AllClasses";
import Error from "../Pages/Error/Error";


  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>

        },
        {
            path:'/register',
            element:<Register></Register>

        },
        {
          path:'/classes',
          element:<AllClasses></AllClasses>
        }
        
      ]
     
    },
    {
      path: "*",
      element: <Error></Error>
    }
  ]);