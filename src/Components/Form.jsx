// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import SendForm from "./SendForm";
import { Link } from "react-router-dom";
import { routes } from "../Utils/routes";
import { useGlobalstates } from "../Context/Context";



const Form = () => {
  
  const {nombreContacto, setNombreContacto} = useGlobalstates()
  const [email, setEmail] = useState('')
  const [consulta, setConsulta] = useState('')
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)
  const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const esValido = expReg.test(email)
  //Aqui deberan implementar el form completo con sus validaciones
  
  const onChangeNombre = (e) =>{
    setNombreContacto(e.target.value)
  }
  const onChangeEmail = (e) =>{
    setEmail(e.target.value)
  }
  const onChangeConsulta = (e) =>{
    setConsulta(e.target.value)
  }
  
  const handleSubmit = e =>{
    e.preventDefault()
    if(nombreContacto.length >= 5) {
      
      setShow(true)
      setError(false)
      
      
    }else if(esValido){
      setShow(true)
      setError(false)
      setEmail('')
      setConsulta('')
    }else {   
      setError(true)
      
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit} >

              <label>Nombre completo</label>
                <input 
                  type="text"
                  placeholder="ingrese su nombre"
                  required
                  value={nombreContacto}
                  id="nombre"
                  name="nombre"
                  onChange={onChangeNombre}
                />

              <label>Email</label>
                <input 
                  type="mail"
                  placeholder="ingrese su correo electronico"
                  required
                  value={email}
                  id="email"
                  name="email"
                  onChange={onChangeEmail}
                />
              
              <label>Ingrese su Consulta
              <textarea
                  type="textArea"
                  placeholder="maximo 200 caracteres"
                  rows={2} cols={30}
                  value={consulta}
                  id="consulta"
                  name="consulta" 
                  onChange={onChangeConsulta}
                />

              </label>
                

              <button> Enviar</button>
        
        {error && 'Por favor verifique su información nuevamente'}
        {show? <><SendForm key={email} name={nombreContacto}/> 
        
          <button className='buttonVolver'><Link to={routes.home}>volver a la pagina principal</Link></button></>

        : null }

      </form>
      
    </div>
  );
};

export default Form;
