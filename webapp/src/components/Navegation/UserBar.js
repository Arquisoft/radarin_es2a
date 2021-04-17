import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

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
                <li className="nav-item">
                    <Nav.Link href="/logout" className="nav-link">Cerrar Sesión</Nav.Link>
                </li>
            </ul>
        );
    }
}