import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { AuthButton} from "@solid/react";
import {  LoggedIn, LoggedOut} from "@solid/react";

function desconectar(){
    window.sessionStorage.setItem('desconecto','si')
}
export default class NavBar extends Component {
    render(){
        return(
            <ul className="navbar-nav ml-auto"> 
                <li className="nav-item">
                    <Nav.Link href="/amigos" className="nav-link">Amigos</Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link href="/peticiones" className="nav-link">Peticiones</Nav.Link>
                </li>
                <LoggedOut>
                <li className="nav-item">
                    <Nav.Link href="/logout" className="nav-link">Cerrar Sesión</Nav.Link>
                </li>
                </LoggedOut>
                <LoggedIn>
                <AuthButton popup="https://solid.github.io/solid-auth-client/dist/popup.html"
                    login="Iniciar sesión con solid" logout="Cerrar Sesión" onClick={desconectar()} /> 
                </LoggedIn>

            </ul>
        );
    }
}