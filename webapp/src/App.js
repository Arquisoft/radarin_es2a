import React, { useContext, useState } from "react";
import "./App.css";
import AdminUser from "./components/Admin/AdminUser";
import AdminAdmin from "./components/Admin/AdminAdmin";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import LoginHook from "./components/Login/LoginHook";
import "bootstrap/dist/css/bootstrap.min.css";
import Registrer from "./components/Registrer/Registrer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Barra from "./components/Navegation/NavBar";
import { MapContainer } from "./components/Map/MapContainer";
import Friends from "./components/Friends/Friends";
import Peticiones from "./components/Friends/Peticiones";
import ChatRoom from "./components/Messages/ChatRoom";
import {UserContextProvider} from "./context/UserContext";
import Principal from "./components/Principal";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import { LoggedIn, LoggedOut } from "@solid/react";


class App extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
  }


  render() {
    return (
      <UserContextProvider>
      <div className="App">
        <Router >
            <Barra/>
          <div className="App-content">
          <Switch>
          <React.Fragment>
            <Route exact path="/" component={Principal} />
            <Route path="/admin/users" component={AdminUser} />
            <Route path="/admin/admins" component={AdminAdmin} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/registrarse" component={Registrer} />
            <Route path="/home" component={Home} />
            <Route path="/amigos" component={Friends} />
            <Route path="/peticiones" component={Peticiones} />
            <Route path="/perfil" component={Profile} />
            <LoggedIn>
            <Route path="/mensajes/:friend">
                <ChatRoom user={window.sessionStorage.getItem("pod")}/>
            </Route>
            <Route path="/map/:friend">
                <MapContainer user={window.sessionStorage.getItem("pod")}/>
            </Route>
            </LoggedIn>
            <LoggedOut>
            <Route path="/mensajes/:friend">
                <ChatRoom user={window.sessionStorage.getItem("user")}/>
            </Route>
            <Route path="/map/:friend">
                <MapContainer user={window.sessionStorage.getItem("user")}/>
            </Route>
            </LoggedOut>
            
            <LoginHook />
            <ToastContainer />
            </React.Fragment>
            </Switch>

          </div>
          

        </Router>
      </div>

      </UserContextProvider>

    );
}
}
export default App;
