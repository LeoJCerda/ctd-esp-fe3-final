// eslint-disable-next-line no-unused-vars
import React from 'react'
//import { useParams } from 'react-router-dom'
import { useGlobalstates } from '../Context/Context'



const SendForm = () => {
  const { nombreContacto } = useGlobalstates('')
  console.log('esto es SENDFORM linea 10');
  console.log(nombreContacto);
  return (
    <div className='confForm'>
        <h2>Gracias {nombreContacto}</h2>
        <p>te contactaremos cuando antes vía mail</p>
    </div>
  )
}

export default SendForm