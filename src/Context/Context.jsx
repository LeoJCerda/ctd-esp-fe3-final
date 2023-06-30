import axios from "axios";
import { createContext, useContext, useState, useReducer, useEffect } from "react";
import Favs from "../Routes/Favs";

export const GlobalStates = createContext()

const FavInitialstate = JSON.parse(localStorage.getItem('favs')) || []
const favReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV': 
            return [...state, action.payload] 
        default:
            throw new Error()
    }
}

const DentInitialState = {
    dentistas:[],
    dentista:{}
}
const dentReducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {dentistas: action.payload, dentista: state.dentista}
        case 'GET_ONE':
            return {dentistas: state.dentistas, dentista: action.payload}
        default:
            throw new Error()
    }
}

const Context = ({children}) => {
    const [detail, setDetail] = useState({})
    //const [favState, setFavState] = useState({})
    const [nombreContacto, setNombreContacto] = useState()
    const [theme, setTheme] = useState('light')
    const [dentista, setDentista] = useState([])
    const [favState, favDispatch] = useReducer(favReducer, FavInitialstate)
    const [dentState, dentDispatch] = useReducer(dentReducer, DentInitialState)
    const urlList  = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        axios(urlList)
        .then(res => dentDispatch({type: 'GET_LIST', payload: res.data}))
        .catch(err => console.log(err))
    },[])
    useEffect(() => {
        console.log(favState)
        localStorage.setItem('favs', JSON.stringify(favState))
    }, [favState])
   
    

    console.log('este es el CONTEXT')

   



    return (
        <GlobalStates.Provider value={{
            nombreContacto, setNombreContacto,
            theme, setTheme,
            dentista, setDentista,
            favState, favDispatch, 
            dentState, dentDispatch,
            detail, setDetail

        }}>
            {children}
        </GlobalStates.Provider>
    )
}
export default Context

export const useGlobalstates = () => useContext(GlobalStates)