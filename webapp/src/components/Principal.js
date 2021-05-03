import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Welcome from "./Welcome";
import logo from "../logo.svg";
import escuela from "../images/escuela.jpg";

function Principal() {
  return(
    <div style={{width:"80%"}}>
    <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Welcome name="Bienvenid@" />
    </div>
    <div>
      <br></br>
      <h1>Proyecto asignatura Arquitectura del Software</h1>
      <h3>Escuela de Ingeniería Informática (Oviedo)</h3>
      <h4>Universidad de Oviedo</h4>
      <br></br>
      <img src={escuela} style={{width:"60%"}}/>
      <br></br>
      <br></br>
      <br></br>
    </div>
    <h4  style={{float:"left"}}>Participantes:</h4>
    <br></br>
      <br></br>
    <div  style={{width:"400px"}}>
        <ul>
          <li>Laura Delgado Álvarez (UO271314)</li>
          <li>Raúl López Calvo (UO263918)</li>
          <li>Christian Díaz González (UO258427)</li>
          <li>Javier González Fernández (UO245020)</li>
          <li>Lucas Suarez Cabal (UO264423)</li>
          <li>Gaspar Pisa Eyaralar (UO250825)</li>
        </ul>
    </div>
    </div>
  ); 

}

export default Principal;