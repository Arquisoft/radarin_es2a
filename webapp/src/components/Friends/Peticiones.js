import React, {useState, useEffect} from "react";
import {  List, Value, Name, Link } from "@solid/react";
import "./Friends.css";
import "bootstrap/dist/css/bootstrap.css";
import DocumentTitle from "react-document-title";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {db} from '../../api/firebase'


function Peticiones() {



const { default: data } = require("@solid/query-ldflex");

const usuarioActivo = window.sessionStorage.getItem('user');

const [peticiones, setPeticiones] = useState([]);

const getPeticiones= async () => {
    const docs = [];
    const querySnapShot = await db.collection('peticiones').get();
    querySnapShot.forEach(doc => {
        if (String(doc.data().receptor.localeCompare(usuarioActivo))=== String(0)){
            docs.push({...doc.data(), id: doc.id})
        }
    });
    setPeticiones(docs);
};

const aceptarPeticion= async (idUsuario) => {
    toast.info("Has aceptado la petición de amistad", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 5000
      } );
      };
  

  const rechazarPeticion = async (idUsuario) => {
    if (window.confirm("¿Estás seguro de rechazar esta petición?")){
        toast.info("Has eliminado la petición de amistad correctamente", {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 5000
          } );
    }
      };

  const Card = (props) => {
    return (
      <div class="card bg-info text-white" >
        <div class="card-body">
          <h2 class="card-title" id="friendName">
            <Name src={props.nombre}>{props.nombre}</Name>
          </h2>
          <center>
            <div className="botones">
             <button className="btn btn-light"  id="botonOpcion"  onClick={() => aceptarPeticion(props.idUsuario)} data-testId="button" >Aceptar</button>
              <button className="btn btn-light" id="botonOpcion"  onClick={() => rechazarPeticion(props.idUsuario)}  data-testId="button"  >Rechazar 
              </button>
            </div>
          </center>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getPeticiones();
  }, []);

  

  
  return (
    <DocumentTitle title="Peticiones">
      <div className="prueba">
      <h2 className="h2" data-testId="label">Estos son tus peticiones pendientes: </h2>
    <div className="col-md-8">
        {peticiones.map(peticion => (
            <div className="card mb-1">
                <div className="card-body">
            <h4>{peticion.emisor}</h4>
            </div>
            </div>
        )
            
        )}
    </div>
    </div>
        {}
    </DocumentTitle>
  );


}

  export default Peticiones;