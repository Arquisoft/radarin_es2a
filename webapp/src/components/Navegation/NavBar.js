import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import UserBar from './UserBar';
import HomeBar from './HomeBar';
import AdminBar from './AdminBar';


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
            <div>
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
                                <UserBar/> : <HomeBar/>
                                
                        }
                    </div>
                </div>
            </Navbar>
            {
                this.state.session?
                <AdminBar/>:null
            }
            </div>
        );
    } 
}