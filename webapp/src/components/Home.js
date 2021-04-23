import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { addUserPos } from '../components/Service/LocationService'
import imagen from '../home_image.jpg'
import solid from '../solid.svg'
import github from '../github.svg'
import document from '../document.svg'

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

        <div className="container d-flex justify-content-center flex-nowrap">
            <div className="row d-flex p-2 mb-5 justify-content-center">
            
            <div className="col-md-4">
            <div className="card bg-light p-2 mb-5" style={{ width: '18rem', high: '16rem' }}>
              <img src={solid} className="card-img-top"></img>
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


            <div className="col-md-4">
            <div className="card bg-light p-2 mb-2" style={{ width: '18rem', high: '16rem' }}>
              <img src={github} className="card-img-top"></img>
              <div className="card-body bg-dark">
                <h5 className="text-light">Solid</h5>
                <p className="card-text text-light">Ver el codigo de la aplicacion en github</p>
                <form action="https://github.com/Arquisoft/radarin_es2a">
                  <input
                    type="submit"
                    className="btn btn-info btn-block"
                    value="Visitar sitio"
                  >
                  </input>
                </form>
              </div>
            </div>
            </div>

            <div className="col-md-4">
            <div className="card bg-light" style={{ width: '18rem', high: '16rem' }}>
              <img src={document} className="card-img-top"></img>
              <div className="card-body bg-dark">
                <h5 className="text-light">Documentacion</h5>
                <p className="card-text text-light">Ver la documentacion basada en arc42</p>
                <form action="https://radarines2awebapp.herokuapp.com/docs/">
                  <input
                    type="submit"
                    className="btn btn-warning btn-block"
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
      </div>
  )

}

export default Home;