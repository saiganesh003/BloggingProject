import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Write  from "./Write";
import Single from "./Single";
import './style.scss';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Layout =() => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <div><Login/></div>,
  },
  {
    
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/write",
        element:<Write/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      }
    ]
  },
  {
    path:"/register",
    element:<div><Register/></div>
  }
]);

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  )
}

export default App
