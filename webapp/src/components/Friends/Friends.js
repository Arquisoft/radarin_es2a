import React, {useState} from "react";
import {  List, Value, Name, Link } from "@solid/react";
import "./Friends.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import DocumentTitle from "react-document-title";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {db} from '../../api/firebase'


function Friends() {

const { default: data } = require("@solid/query-ldflex");

const [details, setDetails] = useState({emisor: window.sessionStorage.getItem('user'), receptor: "", estado: "creada"});

const addFriend = async (idAmigo) => {
      console.log(details.receptor);
      console.log(details.emisor);
      console.log(details.estado);
      if (idAmigo.localeCompare(window.sessionStorage.getItem('user')) !== 0 ){
        if (await existeUsuario(idAmigo)){
         if (idAmigo.localeCompare("") !== 0) {
            if (await amigoExistente(idAmigo)) {
               toast.error("Ya sois amig@s", {
                position: toast.POSITION.BOTTOM_LEFT,
                autoClose: 5000
          } );
        }  else {
          await db.collection('peticiones').doc().set(details);
          toast.info("Tu amig@ se ha agregado", {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 5000
          } );
          await sleep(5000);
          reload();
        }
      } else {
        toast.error("Cadena vacía", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 5000
        } );
      }
    }
  } else{
    toast.error("No puedes agregarte a ti mism@", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 5000
    } );
  }
    };

  const amigoExistente = async (idAmigo) => {
    return false;
  };

  const existeUsuario = async (idAmigo) => {
    return false;
  };



  const reload = () => {
    window.location.reload();
  };

  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  const Card = (props) => {
    return (
      <div class="card bg-info text-white" >
        <div class="card-body">
          <h2 class="card-title" id="friendName">
            <Name src={props.nombre}>{props.nombre}</Name>
          </h2>
          <center>
            <div className="botones">
              <Link href={props.nombre} className="btn btn-light" id="botonOpcion" data-testId="link">Perfil</Link>
              <button className="btn btn-light" id="botonOpcion" data-testId="button"  >Eliminar</button>
            </div>
          </center>
        </div>
      </div>
    );
  };

  
  return (
    <DocumentTitle title="Amigos">
      <div className="prueba">
      <h2 className="h2" data-testId="label">Estos son tus amig@s: </h2>
        <h4 class="card-title" id="addFriend" data-testId="addFriend">Envía una petición a un/a amig@</h4>
        <div class="wrap">
          <div class="search">
            <input type="text" class="searchTerm" placeholder="correoamigo@amigosparasiempre.es" onChange={e => setDetails({...details, receptor:e.target.value})} id="input" />
            <button type="submit" class="searchButton"  onClick={() => addFriend(document.getElementById("input").value)}>
              <SearchOutlinedIcon className="iconSearch" />
            </button>
          </div>
        </div>

        

        <br></br>
      <List src={`[${"https://javigrao.solidcommunity.net/profile/card#me"}].friends`} className="list" padding-inline-start="0">{(friend) =>
        <li key={friend} className="listElement">
          <p>
            <Card nombre={`[${friend}]`} web={"https://javigrao.solidcommunity.net/profile/card#me"}></Card>
          </p>
        </li>}
      </List>

        <br></br>
      </div>
    </DocumentTitle>
  );


}

  export default Friends;