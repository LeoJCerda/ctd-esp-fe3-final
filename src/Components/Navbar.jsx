// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Utils/routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.home}><h4 className='link'>Home</h4></Link>
      <Link to={routes.contacto}><h4 className='link'>Contacto</h4></Link>
      <Link to={routes.destacados}><h4 className='link'>Favoritos</h4></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='push'>Change theme</button>
    </nav>
  )
}

export default Navbar