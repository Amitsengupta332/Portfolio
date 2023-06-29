import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Skills from './components/Skills/Skills.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path:'/Contact',
        element: <Contact></Contact>
      },
      {
        path: '/Skills',
        element: <Skills></Skills>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
  </div>
)
