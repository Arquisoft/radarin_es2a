import React from "react";
import { Value } from "@solid/react";
import "./Friends.css";
import "bootstrap/dist/css/bootstrap.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import DocumentTitle from "react-document-title";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Friends = () => {
    return (
      <DocumentTitle title="Friends">
        <div className="prueba">
          <h2 className="h2" data-testId="label">Tus amigos, <Value src="Javier" /> </h2>
          <h4 class="card-title" id="addFriend" data-testId="addFriend">Añade tus amigos</h4>
          <div class="wrap">
            <div class="search">
              <input type="text" class="searchTerm" placeholder="https://usuario.solid.community/profile/card#me" id="input" />
              <button type="submit" class="searchButton">
                <SearchOutlinedIcon className="iconSearch" />
              </button>
            </div>
          </div>
  
          <br></br>
          <ToastContainer />
        </div>
      </DocumentTitle>
    );
  };

  export default Friends;