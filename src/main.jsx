import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Layout/Home.jsx';
import Skill from './Components/Skill.jsx';
import Education from './Components/Education.jsx';
import Contact from './Components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/skill',
        element:<Skill></Skill>
      },
      {
        path:'/education',
        element:<Education></Education>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
