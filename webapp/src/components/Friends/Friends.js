import React, { useState, useEffect } from "react";
import { useWebId, List, Value, Name, Link, LoggedIn } from "@solid/react";
import "./Friends.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import DocumentTitle from "react-document-title";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../api/firebase";
import { useHistory } from "react-router-dom" ;
import DistanceBetween from "./DistanceBetween";
import {eliminarAmigo,existeUsuario} from "../Service/FriendService";
import emailjs from "emailjs-com";
import {notificaAmigoCercano} from "./DistValue";
import { watchLocation } from "../Service/LocationService";





function Friends() {

  

  const { default: data } = require("@solid/query-ldflex");

  var usuarioActivo = window.sessionStorage.getItem("user");

  
  const [details, setDetails] = useState({ emisor: window.sessionStorage.getItem("user"), receptor: "" });

  const [amigos, setAmigos] = useState([]);

  const [usuarios, setUsuarios] = useState([]);

  const [pods, setPods] = useState([]);

  const [distances, setDistances] = useState([]);

  const history = useHistory();

  const id = useWebId();


  var pod = window.sessionStorage.getItem("pod");


  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function SendEmail(destinatario, correoDestinatario) {
    //const webId = useWebId();
    //e.preventDefault();
    var Params ={
      from_name:id,
      to_name:destinatario,
      to_address:correoDestinatario
    };
    emailjs.send("service_nlb79jf", "template_6mokhp4", Params, "user_HhFnythpqGU2PbbLkk938")
      .then((result) => {
      }, (error) => {
      });
  }

  function Correo(idAmigo){
    let correo = prompt("Introduce el correo de tu amigo","amigo@amigo.com");
    if(correo.includes("@")){
      SendEmail(idAmigo, correo);
      toast.info("Has enviado la invitación correctamente", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500
    });
    }
    else{
      toast.error("Introduce una dirección válida", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500
      });
    }
  }

  const getAmigos = async () => {
    if (window.sessionStorage.getItem("user") === null){
      usuarioActivo= pod;
    }
    
    db.collection("amigos").onSnapshot((querySnapShot) => {
      const docs = [];
      querySnapShot.forEach(doc => {
        if (String(doc.data().usuario1.localeCompare(usuarioActivo)) === String(0)) {
          docs.push({ nombre: doc.data().usuario2, id: doc.id });
          notificaAmigoCercano(doc.data().usuario2,[]);
        }
        if ((String(doc.data().usuario2.localeCompare(usuarioActivo)) === String(0))) {
          docs.push({ nombre: doc.data().usuario1, id: doc.id });
          notificaAmigoCercano(doc.data().usuario1,[]);
        }
      });
      
      setAmigos(docs);
    });

  };

  const getUsuarios = async () => {
    
    db.collection("users").onSnapshot((querySnapShot) => {
      const docs = [];
      const pods = [];
      querySnapShot.forEach(doc => {
        if ((String(doc.data().email.localeCompare("")) === String(0))) {
          docs.push({ nombre: doc.data().pod, id: doc.id });
          pods.push({ nombre: doc.data().pod, id: doc.id });
        }
        else{
          docs.push({ nombre: doc.data().email, id: doc.id });
        }
      });
      setPods(pods);
      setUsuarios(docs);
    });

  };

  const existeAmigo = async (idAmigo) => {

    const querySnapShot = await db.collection("amigos").get();
    var existeAmigo = false;
    querySnapShot.forEach(doc => {
      if (String(doc.data().usuario1.localeCompare(details.emisor)) === String(0) && (String(doc.data().usuario2.localeCompare(idAmigo)) === String(0))) {
        existeAmigo = true;
      }
      if (String(doc.data().usuario2.localeCompare(details.emisor)) === String(0) && (String(doc.data().usuario1.localeCompare(idAmigo)) === String(0))) {
        existeAmigo = true;
      }
    })
    if (existeAmigo) {
      return true;
    }
    else {
      return false;
    }
  };


 
const  NavigateToMessages = (id) => {
  if (id.includes("https://")){
    let indice = id.indexOf("/");
    let extraida = id.substring(indice+2, id.length);
    history.push("/mensajes/"+ extraida);
    history.go(0);
  }
  else{
    history.push("/mensajes/"+ id);
    history.go(0);
  }
};

const  NavigateToMap = (id) => {
  history.push("/map/"+id);
  history.go(0);
};

function comprobarUsuario(idUsuario){
  
  var existeUsuario = false;
 
  usuarios.forEach(usuario => {
    
    if (String(usuario.nombre.localeCompare(idUsuario)) ===String(0)){
        existeUsuario = true;
    }
  })
return existeUsuario;
}


function existePod(idUsuario){
  var existePod = false;
 
  pods.forEach(usuario => {
    
    if (String(usuario.nombre.localeCompare(idUsuario)) ===String(0)){
        existePod = true;
    }
  })

return existePod;
}



const existePeticion = async (idAmigo) => {
  const querySnapShot = await db.collection("peticiones").get();
  var existePeticion = false;
  querySnapShot.forEach(doc => {
    if (String(doc.data().emisor.localeCompare(details.emisor)) === String(0) && (String(doc.data().receptor.localeCompare(idAmigo)) === String(0))) {
      existePeticion = true;
    }
  })
  if (existePeticion) {
    return true;
  }
  else {
    return false;
  }
};


function comprobarAmigo(idUsuario){
  
  var existeAmigo = false;
 amigos.forEach(doc => {
    if (String(doc.nombre.localeCompare(idUsuario)) === String(0)) {
      existeAmigo = true;
    }
  })
  if (existeAmigo) {
    return true;
  }
  else {
    return false;
  }
}

const addFriend = async (idAmigo) => {
    
  details.receptor=idAmigo;
  if (window.sessionStorage.getItem("user") === null){
    details.emisor=window.sessionStorage.getItem("pod");
  }

  if (idAmigo.localeCompare(details.emisor) !== 0 ) {
    if (idAmigo.localeCompare("") !== 0) {
      if (await existeUsuario(idAmigo)) {
        if (await existeAmigo(idAmigo)) {
          toast.error("Ya sois amig@s", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2500
          });
        } else {
          if (await existePeticion(idAmigo)) {
            toast.error("Ya habías enviado esta petición", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2500
            });
          }
          else {
            await db.collection("peticiones").doc().set(details);
            toast.info("Has enviado la petición de amistad correctamente", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2500
            });
            await sleep(2500);
          }
        }
      }
      else {
        toast.error("No existe el usuario indicado", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2500
        });
      }
    } else {
      toast.error("Cadena vacía", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500
      });
    }
  }
  else {
    toast.error("No puedes agregarte a ti mism@", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2500
    });
  }
};



const Card =  (props) => {
  //Tres posibles escenarios: El usuario de solid no usa la aplicación, la usa pero no somos amigos o la usa y somos amigos.
  //Si la usa y somos amigos ya lo muestra en la primera lista, por lo que aquí no lo mostramos
  
  var friend = props.nombre.substring(1,props.nombre.length-1);
  var existeUsuario = comprobarUsuario(friend);
  var existeAmigo = comprobarAmigo(friend);
  if (existeUsuario){
    if (existeAmigo===false){
      return (
        <div class="card bg-info text-white" >
          <div class="card-body">
            <h4 class="card-title" id="friendName">
              <Name src={props.nombre}>{props.nombre}</Name>
            </h4>
            <center>
              <div className="botones">
                <button className="btn btn-light" id="botonOpcion"   data-testId="button" onClick={() => addFriend(friend)}>Enviar petición de amistad </button>
                <Link href={friend} className="btn btn-light" id="botonOpcion" data-testId="link">
                      <i className="material-icons">person</i>
                      </Link>
              </div>
            </center>
          </div>
        </div>
      );
    }
    else{
      return null;
    }
  }
  else{
  return (
    <div class="card bg-info text-white" >
      <div class="card-body">
        <h4 class="card-title" id="friendName">
          <Name src={props.nombre}>{props.nombre}</Name>
        </h4>
        <center>
          <div className="botones">
          <button className="btn btn-light" id="botonOpcion" data-testId="button" onClick={() => Correo(friend)}>Invitar a usar radarín</button>
          <Link href={props.nombre} className="btn btn-light" id="botonOpcion" data-testId="link">
                      <i className="material-icons">person</i>
          </Link>
            
            
          </div>
        </center>
      </div>
    </div>
    );
  }
};



 

  useEffect(() => {
    getUsuarios();
    getAmigos();
    watchLocation();
  }, []);


  const webId = useWebId();
  if (window.sessionStorage.getItem("user") !== null  || window.sessionStorage.getItem("pod") !== null) {
    return (
      <DocumentTitle title="Amigos">

        <div className="prueba">
          <h2 className="h2" data-testId="label">Estos son tus amig@s: </h2>
          <h4 class="card-title" id="addFriend" data-testId="addFriend">Envía una petición a un/a amig@</h4>
          <div class="wrap">
            <div class="search">
              <input type="text" class="searchTerm" placeholder="Introduce su correo o dirección pod" onChange={e => setDetails({ ...details, receptor: e.target.value })} id="input" />
              <button type="submit" class="searchButton" onClick={() => addFriend(document.getElementById("input").value)}>
                <SearchOutlinedIcon className="iconSearch" />
              </button>
            </div>
          </div>
          <br></br>


          <div className="col-md-16 p-2">
          
            {amigos.map(amigo => (
              <div class="card bg-info text-white mb-2" >
                
                <div className="card-body">
                  <h2 className="card-title" id="friendName">
                    <Name src={amigo.nombre}>{amigo.nombre}</Name>
                  </h2>
                  <center>
                      <div className="botones p-2">
                      <button className="btn btn-light" id="botonOpcion" onClick={() => NavigateToMessages(amigo.nombre)} data-testId="btnChatear" >
                        <i className="material-icons">insert_comment</i>
                      </button>
                      <button className="btn btn-light" id="botonOpcion" onClick={() => NavigateToMap(amigo.nombre)} data-testId="btnUbicacion"  >
                        <i className="material-icons">location_on</i>  
                      </button>
                      <button className="btn btn-light" id="botonOpcion" onClick={() => eliminarAmigo(amigo.id)}  data-testId="btnEliminar"  >
                        <i className="material-icons">delete</i>  
                      </button>
                      {(existePod(amigo.nombre) !== false) ? ( 
                          <div>    
                      <Link href={amigo.nombre} className="btn btn-light" id="botonOpcion" data-testId="link">
                      <i className="material-icons">person</i>
                      </Link>
                          </div>
                        ) : (
                          <div>
                          </div>
                     )}
                    </div>
                    
                  </center>
                  <center>
                    <DistanceBetween friendEmail={amigo.nombre}/>
                  </center>
                </div>
              </div>
            )
            
            )}
            

          </div>
          <br></br>
          <LoggedIn>
          <h2 className="h2" data-testId="label">Encuentra a tus amigos de solid </h2>
        <List src={`[${webId}].friends`} className="list" padding-inline-start="0">{(friend) =>
          <li key={friend} className="listElement">
            <p>
              <Card nombre={`[${friend}]`}></Card>
            </p>
          </li>}
        </List>
        </LoggedIn>
        </div>
            
      </DocumentTitle>
    );
  }
  else {
      return(
      <DocumentTitle title="Amigos">
      <div className="prueba">
        <h2 className="h2" data-testId="label">No estas logueado </h2>
        </div>
        </DocumentTitle>
        );
    
  }

}

export default Friends;