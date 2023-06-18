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
import AllInstructors from "../Pages/AllInstructors/AllInstructors/AllInstructors";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import ALLUsers from "../Pages/Dashboard/AllUsers/ALLUsers";
import AdminRoute from './AdminRoute';
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";


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
          element:<PrivateRoute><AllClasses></AllClasses></PrivateRoute>
        },
        
        {
          path:'/instructors',
          element:<PrivateRoute><AllInstructors></AllInstructors></PrivateRoute>
        }
        
      ],
     
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
          path:'allusers',
          element:<ALLUsers></ALLUsers>
        },{
          path:'addItem',
          // element:<AdminRoute><AddItem></AddItem></AdminRoute>
          element:<AddItem></AddItem>
        },
        {
          path:'manageClass',
          // element:<AdminRoute><ManageClass></ManageClass></AdminRoute>,
          element:<ManageClass></ManageClass>,

        }
      ]
     
    },

    {
      path: "*",
      element: <Error></Error>
    },

  ]);