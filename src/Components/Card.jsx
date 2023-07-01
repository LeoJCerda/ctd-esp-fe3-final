import { useGlobalstates } from "../Context/Context";
import {Link} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Card = ({name, username, id}) => {
  const {favState, favDispatch} = useGlobalstates()
  
  const addFav = ()=>{
    
    favDispatch({type : 'ADD_FAV', payload: {id, name, username}})
    localStorage.setItem('favs', JSON.stringify(favState))
  }
    return (
    <div className="card" id="tarjeta">
        <Link to={'/detalle/' + id} key={id} name={name} id={id}>
            <div key={id}>
                <img className= "doctor" src="/images/doctor.jpg" alt="" />
                <h3>{name}</h3>                                                                                                                
                <h4>{username}</h4>
                <h2>{id}</h2>
            </div>
        </Link>
        <button onClick={addFav} id="buttonAdd" className="favButtonAdd">Add fav</button>
        {/* <button onClick={removeFav} id="buttonRemove" className="favButtonRmv">remove fav</button> */}
        
    </div>
  );
}

export default Card;
