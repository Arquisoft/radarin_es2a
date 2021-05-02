import React, { useState, useEffect } from "react";
import "./Friends.css";
import "bootstrap/dist/css/bootstrap.css";
import DocumentTitle from "react-document-title";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../api/firebase";


function Peticiones() {

    const { default: data } = require("@solid/query-ldflex");

    var usuarioActivo = window.sessionStorage.getItem("user");

    const [peticiones, setPeticiones] = useState([]);

    const [amigos, setAmigos] = useState({ usuario1: window.sessionStorage.getItem("user"), usuario2: "" });

    const getPeticiones = async () => {
        if (usuarioActivo === null){
            usuarioActivo= window.sessionStorage.getItem("pod");
            amigos.usuario1=usuarioActivo;
        }
        db.collection("peticiones").onSnapshot((querySnapShot) => {
            const docs = [];
            querySnapShot.forEach((doc) => {
                if (String(doc.data().receptor.localeCompare(usuarioActivo)) === String(0) || String(doc.data().receptor.localeCompare(window.sessionStorage.getItem("pod"))) === String(0) ) {
                    docs.push({ ...doc.data(), id: doc.id });
                }
            });
            setPeticiones(docs);
        });
    };


    const aceptarPeticion = async (id, idUsuario) => {
        await db.collection("peticiones").doc(id).delete();
        if (window.sessionStorage.getItem("user")=== null){
            amigos.usuario1=window.sessionStorage.getItem("pod");
        }
        setAmigos(amigos.usuario2 = idUsuario);
        await db.collection("amigos").doc().set(amigos);
        toast.info("Has aceptado la petición de amistad", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2500
        });
    };


    const rechazarPeticion = async (id) => {
        if (window.confirm("¿Estás seguro de rechazar esta petición?")) {
            await db.collection("peticiones").doc(id).delete();
            toast.info("Has eliminado la petición de amistad correctamente", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2500
            });
        }
    };

    async function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }


    useEffect(() => {
        getPeticiones();
    }, []);



    if (window.sessionStorage.getItem("user") !== null || window.sessionStorage.getItem("pod") !== null) {
        return (
            <DocumentTitle title="Peticiones">
                <div className="prueba">
                    <h2 className="h2" data-testId="label">Estas son tus peticiones pendientes: </h2>
                    <div className="col-md-8 p-2">
                        {peticiones.map((peticion) => (
                            <div className="card mb-1">
                                <div className="card-body">
                                    <h4>{peticion.emisor}</h4>
                                    <button className="btn btn-light" id="botonOpcion" onClick={() => aceptarPeticion(peticion.id, peticion.emisor)} data-testId="button" >Aceptar</button>
                                    <button className="btn btn-light" id="botonOpcion" onClick={() => rechazarPeticion(peticion.id)} data-testId="button"  >Rechazar </button>
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
    else {
          return(
          <DocumentTitle title="Amigos">
          <div className="prueba">
            <h2 className="h2" data-testId="label">No estas logueado</h2>
            </div>
            </DocumentTitle>
            );
      }
}

export default Peticiones;