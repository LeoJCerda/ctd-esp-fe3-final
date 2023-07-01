// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "../Components/Card";
import { useGlobalstates } from "../Context/Context";

const Favs = () => {
  
  const {favState} = useGlobalstates([])
  
  
  const clearFavs = ()=>{
    localStorage.clear()
    window.location.reload()
  }
  console.log(favState);
  return (
    <div className="favoritos">
      <h1>Dentistas favoritos</h1>
      <div className="card-grid-fav">
        {favState.map((favorito)=>( <Card key={favorito.id} name={favorito.name} username={favorito.username} id={favorito.id}/>))}
      </div>
      <button className="resetButton" onClick={clearFavs}>resetar favoritos</button>
    </div>
  );
};

export default Favs;
