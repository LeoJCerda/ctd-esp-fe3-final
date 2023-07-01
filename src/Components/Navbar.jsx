// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Utils/routes'
import { useGlobalstates } from '../Context/Context'

const Navbar = () => {
  const {theme, setTheme} = useGlobalstates()
  const toggleTheme = () =>{
    if(theme === 'light'){
      setTheme('dark')
      console.log('seteando el tema en DARK');
    }else{
      setTheme('light')
      console.log('seteando el tema en LIGHT');
    }
  }
  useEffect(()=>{
    document.body.className= theme
  },[theme])

  return (
    <nav>
      <Link to={routes.home}><h4 className='link'>Home</h4></Link>
      <Link to={routes.contacto}><h4 className='link'>Contacto</h4></Link>
      <Link to={routes.destacados}><h4 className='link'>Favoritos</h4></Link>
      <button onClick={toggleTheme} className='push'>Change theme</button>
    </nav>
  )
}

export default Navbar