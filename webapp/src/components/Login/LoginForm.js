import React, { useState } from 'react';
import { Container, Button, Input } from '@material-ui/core';
import { AuthButton, Link, LoggedOut } from "@solid/react";
import {  LoggedIn } from "@solid/react";
import RedirectHook from './RedirectHook'



function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (

    <div className="container">

      <form className="card bg-white border-primary mx-auto w-140" onSubmit={submitHandler}>
          <div className="card-header bg-primary text-white font-weight-bold">INICIAR SESIÓN</div>
          {(error !== "") ? (<Container className="error">{error}</Container>) : ""}
          <div className="card card-body">

            <div className="form-group mx-auto mb-3">
              <div className="input-group-text mx-0 mb-3">
                <Input  
                  className="form-control w-100" 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Correo Electrónico" 
                  onChange={e => setDetails({ ...details, email: e.target.value })} 
                  value={details.email} />
              </div>
              
              <div className="input-group-text mx-0 mb-3">
                <Input 
                  className="form-control w-100"
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Contraseña" 
                  onChange={e => setDetails({ ...details, password: e.target.value })} 
                  value={details.password} />
              </div>
              <div >
                <Button 
                  className="bg-success btn btn-block text-white font-weight-bold" 
                  type="submit">
                    Confirmar
                </Button>
              </div>
              </div>
              </div>
              </form>
            <a> ¿Tienes un pod? </a>
            <AuthButton popup="https://solid.github.io/solid-auth-client/dist/popup.html"
            login="Iniciar sesión con solid" logout="Cerrar Sesion"/> 
            <div>    
            <Link href="https://solidcommunity.net/register">Registrate en Solid</Link>     
            </div> 
            <LoggedIn>
              <RedirectHook/>
            </LoggedIn>
    </div>
  )
}

export default LoginForm;