import {createRoot} from 'react-dom/client'
import React from 'react'
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import CountryDetail from './components/CountryDetail';
import Home from './components/Home';
import Error from './components/Error';

const router=createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/:CountryDetail',
                element: <CountryDetail/>
            }
        ]
    }
])

const root=createRoot(document.querySelector("#root"));
root.render(
    <RouterProvider router={router} />
);