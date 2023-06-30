import  { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { routes } from '../Utils/routes'
import { Link } from 'react-router-dom'
import { useGlobalstates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // const {detail, setDetail} = useGlobalstates()
  const params = useParams()
  const [detail, setDetail] = useState({})
  const urlDetail = 'https://jsonplaceholder.typicode.com/users/' + params.id 
  
  console.log(params);
  useEffect(() => {
    axios(urlDetail)
    .then(res => setDetail(res.data))
  },[urlDetail])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  console.log(params)
  return (
    <div className=''>
      <h1>Detail Dentist id   {detail.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <ul className='listaDetalles'>
          <li className='itemDetalles'>id:{detail.id}</li>
          <li className='itemDetalles'>nombre:{detail.name}</li>
          <li className='itemDetalles'>Email: {detail.email}</li>
          <li className='itemDetalles'>Telefono:{detail.phone}</li>
          <li className='itemDetalles'>wesite:{detail.website}</li>
      </ul>
      <button className='buttonVolver'><Link to={routes.home}>volver a la pagina principal</Link></button>
    </div>
  )
}

export default Detail