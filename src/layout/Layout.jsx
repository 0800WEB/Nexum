import React from 'react'
import Navbar from '../components/general/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/general/Footer'
const index = () => {
  return (
    <>
    <header className='bg-primary w-full h-[10vh] px-12 md:px-[64px] xl:px-[120px] flex'>
      <Navbar/>
    </header>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default index