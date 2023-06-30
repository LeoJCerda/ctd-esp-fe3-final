//import React, { Children } from 'react'
import Card from '../Components/Card'
//import { useState, useEffect } from 'react'
//import axios from 'axios' 
import { useGlobalstates } from '../Context/Context'
//import { Link } from 'react-router-dom'
//import { routes } from '../Utils/routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentState} = useGlobalstates()
/*   const {dentista, setDentista} = useGlobalstates([])
  const {state, dispatch} = useGlobalstates([])
  
  const url = "https://jsonplaceholder.typicode.com/users";
  
  useEffect(() => {
      axios(url)
      .then(res => setDentista(res.data))
      
  }, [url])

console.log(dentista) */
console.log('esto es el HOME')  
return (
    <main className="principal" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentState.dentistas.map((dent)=>(
        <Card key={dent.id} name={dent.name} username={dent.username} id={dent.id}/>))}
      </div>
    </main>
  )
}

export default Home