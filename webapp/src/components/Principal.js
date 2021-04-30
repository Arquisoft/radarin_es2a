import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Welcome from "./Welcome";
import logo from "../logo.svg";

function Principal() {
  return(
    <div className="App-header" style={{width:"80%"}}>
            <img src={logo} className="App-logo" alt="logo" />
            <Welcome name="Bienvenid@" />
          </div>
  ); 

}

export default Principal;