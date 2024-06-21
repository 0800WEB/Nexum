import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import Servicio from '../pages/Servicio/Servicio'
import Cases from '../pages/Cases/Cases'
import Nosotros from '../pages/Nosotros/Nosotros'
import Blog from '../pages/Blog/Blog'
import Case from '../pages/Cases/Case'
import ScrollToTop from '../components/general/ScrollToTop'
import Contacto from '../pages/Contacto/Contacto'
import BlogDetail from '../pages/Blog/BlogDetail'
const router = createBrowserRouter([
    {
        path: '',
        element: (
            <>
                <ScrollToTop />
                <Layout />
            </>
    ),
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
                path: "/casos-de-exito/:caso",
                element: <Case />
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
            },
            {
              path: "/contacto",
              element: <Contacto />
            },
            {
              path: "/blog/:blog",
              element: <BlogDetail />
            },
        ]
    }
])
export default router