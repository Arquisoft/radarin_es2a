import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCog} from "@fortawesome/free-solid-svg-icons";

class BarraAdmin extends React.Component{
    constructor(props){
        super(props);
      }

  
    render(){ 
        return(
            <div>
            {
                this.props.adm?

            <Navbar bg="primary" variant="dark">
                <Navbar.Brand><i className="material-icons"><FontAwesomeIcon icon={faUserCog} size="1x"/></i></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/admin/users">Usuarios</Nav.Link>
                    <Nav.Link href="/admin/admins">Administradores</Nav.Link>
                </Nav>
            </Navbar>:null
           }
           </div>
        );
    }
}


export default BarraAdmin;