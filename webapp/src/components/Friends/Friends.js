import React from "react";
import {  List, Value, Name, Link } from "@solid/react";
import "./Friends.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import DocumentTitle from "react-document-title";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { default: data } = require("@solid/query-ldflex");



const addFriend = async (idAmigo, id) => {
    const user = data[id]; 
   
      if (idAmigo.localeCompare("") !== 0) {
        if (await amigoExistente(idAmigo, id)) {
          toast.error("Ya tienes agregado este amigo", {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 5000
          } );
        } else {
        await user.knows.add(data[idAmigo]);
          toast.info("Tu amigo se ha agregado", {
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
    };

  const amigoExistente = async (idAmigo, id) => {
    const user = data[id];
    for await (const friend of user.friends) {
      if (String(friend).localeCompare(String(idAmigo)) === 0){ return true;}
    }
    return false;
  };

const Friends = () => {
    return (
      <DocumentTitle title="Amigos">
        <div className="prueba">
          <h2 className="h2" data-testId="label">Estos son tus amigos, <Value src="Javier" /> </h2>
          <h4 class="card-title" id="addFriend" data-testId="addFriend">Añade tus amigos</h4>
          <div class="wrap">
            <div class="search">
              <input type="text" class="searchTerm" placeholder="https://usuario.solid.community/profile/card#me" id="input" />
              <button type="submit" class="searchButton" onClick={() => addFriend(document.getElementById("input").value, "https://javigrao.solidcommunity.net/profile/card#me")}>
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
          <ToastContainer />
        </div>
      </DocumentTitle>
    );
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

  export default Friends;