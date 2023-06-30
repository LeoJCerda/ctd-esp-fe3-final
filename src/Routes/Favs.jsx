// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "../Components/Card";
import { useGlobalstates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  const {favState} = useGlobalstates([])
  
  
  const clearFavs = ()=>{
    localStorage.clear()
    window.location.reload()
  }
  console.log(favState);
  return (
    <>
      <h1>Dentistas favoritos</h1>
      <button className="favButton" onClick={clearFavs}>resetar favoritos</button>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favState.map((favorito)=>(
              <Card 
                    key={favorito.id}
                    name={favorito.name}
                    username={favorito.username} 
                    id={favorito.id}
              />
                
          
          
        
          
        ))}
      </div>
    </>
  );
};

export default Favs;
