import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import UserBar from './UserBar';

export default class NavBar extends Component {
    state = {
        session: false
    }

    async componentDidMount(){
        const usuario = window.sessionStorage.getItem('user');
        if(usuario != null){
            this.setState({
                session: true
            })
        }
    }

    render() {
        return(
            <Navbar bg="primary" variant="dark">
                <div className="container">
                    <Navbar.Brand>Radarin</Navbar.Brand>
                    <Nav.Link href="/" className="navbar-brand">
                        <i className="material-icons">
                            <FontAwesomeIcon icon={faHome} size='1x'/></i>
                    </Nav.Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                         
                        {
                            this.state.session?
               
                                <UserBar/>
                            :
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Nav.Link href="/login" className="nav-link">Login</Nav.Link>
                                    </li>
                                    <li className="nav-item">
                                        <Nav.Link href="/registrarse" className="nav-link">Registro</Nav.Link>
                                    </li>
                                </ul>
                        }
                    </div>
                </div>
            </Navbar>
        );
    } 
}