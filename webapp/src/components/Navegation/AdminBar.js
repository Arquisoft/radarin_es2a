import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';

class BarraAdmin extends React.Component{
    constructor(props){
        super(props)
      }

    render(){
        return(
            <div id="barraAdmin">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand><i className="material-icons"><FontAwesomeIcon icon={faUserCog} size='1x'/></i></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/admin">Usuarios</Nav.Link>
                    <Nav.Link href="/login">Administradores</Nav.Link>
                </Nav>
            </Navbar>
            </div>
        )
    }
}

export default BarraAdmin;