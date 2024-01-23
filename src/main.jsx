import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Menu from './Menu.jsx';
import TwitterFollowers from './TwitterFollowers.jsx';
import Profil from './Profil.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='container_centrale'><Menu/><Outlet/><TwitterFollowers/></div>,
    children:[
      {
        path:"/",
        element:<><App/></>
      },{
        path:'/profil',
        element:<Profil/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
