import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import addUserPos from '../components/Service/LocationService'

function Home() {

  const usuarioActivo = window.sessionStorage.getItem('user');

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    if(window.sessionStorage.getItem('user') !== null){
      var crd = pos.coords;
      addUserPos(crd.latitude,crd.longitude)
    }
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options)

  return(
    <div>
      <h1>Dame tu localizacion</h1>
    </div>
  )  

}

export default Home;