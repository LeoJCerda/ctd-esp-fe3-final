import React, { useEffect, useState } from "react";
import { useGlobalstates } from "../Context/Context";
import {Link} from 'react-router-dom'
import Detail from "../Routes/Detail";


// eslint-disable-next-line react/prop-types
const Card = ({name, username, id}) => {
  const {favState, favDispatch} = useGlobalstates()
  const [fav, setFav] = useState([])
  
  
  

    const addFav = ()=>{
    
     favDispatch({type : 'ADD_FAV', payload: {id, name, username}})
     localStorage.setItem('favs', JSON.stringify(favState))
     
   }
  
  
  
  console.log(favState)  

  return (
    <div className="card" id="tarjeta">
        {/* En cada card deberan mostrar en name - username y el id */}

        <Link to={'/detalle/' + id} key={id} name={name} id={id}>
            <div key={id}>
                <img className= "doctor" src="/images/doctor.jpg" alt="" />
                <h3>{name}</h3>                                                                                                                
                <h4>{username}</h4>
                <h2>{id}</h2>
            </div>
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        <button onClick={addFav} id="buttonAdd" className="favButtonAdd">Add fav</button>
        {/* <button onClick={removeFav} id="buttonRemove" className="favButtonRmv">remove fav</button> */}
        
    </div>
  );
}

export default Card;
