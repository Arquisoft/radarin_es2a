import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Barra extends React.Component{
    constructor(props){
        super(props)
      }

    render(){
        
        return(
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>Radarin</Navbar.Brand>
                <Nav className="mr-auto">
                {(() => {
                            if (this.props.showMe) {
                                return (
                                    <Nav.Link href="/login">Logout</Nav.Link>
                                        );
                                    }
                            else {
                                return (
                                    <Nav.Link href="/login">Login</Nav.Link>
                                );
                            }
                        })()}
            
                {
                    /*this.props.showMe?
                    
                    <Nav.Link href="/login">Logout</Nav.Link>:
                    <Nav.Link href="/login">Login</Nav.Link>*/
                }
                {(() => {
                            if (!this.props.showMe) {
                                return (
                                    <Nav.Link href="/registrarse">Registro</Nav.Link>
                                        );
                                    }
                        })()}
                {
                    /*this.props.showMe?
                    null:
                    <Nav.Link href="/registrarse">Registro</Nav.Link>*/
                }
                    <Nav.Link href="/admin">Admin</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Barra;