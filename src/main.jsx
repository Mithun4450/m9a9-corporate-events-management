import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ContextProvider from './components/ContextProvider/ContextProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/serviceDetails/:sid",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        
      },
      {
        path: "/gallery",
        element: <PrivateRoute><Gallery></Gallery></PrivateRoute>,
        
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
        
      },
      {
        path: "/about",
        element: <About></About>
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
