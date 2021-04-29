import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { LoggedOut } from "@solid/react";
import LogoutHook from "../Login/LogoutHook";

export default class NavBar extends Component {
    render(){
        
        return(
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Nav.Link href="/login" className="nav-link">Iniciar Sesión</Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link href="/registrarse" className="nav-link">Registro</Nav.Link>
                </li>
                <LoggedOut>
              {
                window.sessionStorage.getItem("desconecto")==="si"?
                <LogoutHook/>:
                null
              }
            </LoggedOut>
            </ul>
            
        );
    }
}