import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import Servicio from '../pages/Servicio/Servicio'
import Cases from '../pages/Cases/Cases'
import Nosotros from '../pages/Nosotros/Nosotros'
import Blog from '../pages/Blog/Blog'
const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {
                path: "/",                
                element: <Home />,
                exact:true
            },
            {
                path: "/casos-de-exito",
                element: <Cases />
            },
            {
                path: "/servicios/:servicio",
                element: <Servicio />
            },
            {
                path: "/nosotros",
                element: <Nosotros />
            },
            {
                path: "/blog",
                element: <Blog />
            }
        ]
    }
])
export default router