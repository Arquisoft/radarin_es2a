import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ReactDOM from 'react-dom';

class Barra extends React.Component{
    constructor(props){
        super(props)
      }

    render(){
        
        return(
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>Radarin</Navbar.Brand>
                <Nav className="mr-auto">
                {
                    this.props.showMe?
                    
                    <Nav.Link href="/login">Logout</Nav.Link>:
                    <Nav.Link href="/login">Login</Nav.Link>
                }
                {
                    this.props.showMe?
                    null:
                    <Nav.Link href="/registrarse">Registro</Nav.Link>
                }
                    <Nav.Link href="/admin">Admin</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Barra;