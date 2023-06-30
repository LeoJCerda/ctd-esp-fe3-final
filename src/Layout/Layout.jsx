import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/> {/*Ej: si estoy en /contacto va a mostrar <Contact/> */}
    </div>
  )
}

export default Layout