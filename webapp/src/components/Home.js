import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { addUserPos } from '../components/Service/LocationService'
import imagen from '../home_image.jpg'
import solid from '../solid-emblem.svg'
import github from '../github.svg'


function Home() {

  const usuarioActivo = window.sessionStorage.getItem('user');

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    if (window.sessionStorage.getItem('user') !== null) {
      var crd = pos.coords;
      addUserPos(crd.latitude, crd.longitude)
    }
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.watchPosition(success, error, options);

  return (
    <div className="card mb-3 ">
      <img src={imagen} className="img img-fluid" alt="imagen" />
      <div className="card-body">
        <h2 className="card-title">Radarin</h2>
        <h4 class="card-text text-muted">¡Quedar con amigos nunca fue mas facil!</h4>

        <div className="container">
          <div className="row">
            <div className="col-md-3">
            <div className="card bg-light" style={{ width: '18rem', high: '16px' }}>
              <img src={solid} style={{ width: '313px', high: '313px' }} className="card-img-top"></img>
              <div className="card-body bg-dark">
                <h5 className="text-light">Solid</h5>
                <p className="card-text text-light">¿Quieres saber mas a cerca del proyecto solid?</p>
                <form action="https://solid.github.io">
                  <input
                    type="submit"
                    className="btn btn-secondary btn-block"
                    value="Visitar sitio"
                  >
                  </input>
                </form>
              </div>
            </div>
            </div>
            <div className="col-md-3"></div>
            <div className="card bg-light" style={{ width: '18rem', high: '16rem' }}>
              <img src={github} style={{ high: '300px' }} className="card-img-top"></img>
              <div className="card-body bg-dark">
                <h5 className="text-light">Solid</h5>
                <p className="card-text text-light">¿Quieres saber mas a cerca del proyecto solid?</p>
                <form action="https://solid.github.io">
                  <input
                    type="submit"
                    className="btn btn-secondary btn-block"
                    value="Visitar sitio"
                  >
                  </input>
                </form>
              </div>
            </div>
            


          </div>

        </div>
      </div>

    </div>
  )

}

export default Home;