import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import {AuthButton} from "@solid/react";
import {LoggedIn, LoggedOut} from "@solid/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentSlash, faPeopleArrows} from "@fortawesome/free-solid-svg-icons";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

function desconectar(){
    window.sessionStorage.setItem("desconecto","si");
}
export default class NavBar extends Component {
    constructor(){
        super();
        window.sessionStorage.setItem("radarDistancia", 30);
    }

    state={
        abierto: false
    }

    abrirModal=()=>{
        this.setState({abierto: true});
    }

    cerrarModal=()=>{
        this.setState({abierto: false});
    }

    render(){

        const handleSliderChange = (event, newValue) => {
            window.sessionStorage.setItem("radarDistancia", newValue);
        };
        
        const slider = 
            <div>
            <Typography id="discrete-slider" gutterBottom>Distancia actual (km):</Typography>
            <br></br><br></br>
            <Slider
                defaultValue={window.sessionStorage.getItem("radarDistancia")}
                step={5}
                marks
                min={0}
                max={100}
                valueLabelDisplay="on"
                onChange={handleSliderChange}
            />
            </div>

        const ventanaModal=
            <Modal isOpen={this.state.abierto} style={{position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <ModalHeader style={{background: "#007bff", color: "white"}}>Ajustar distancia</ModalHeader>
                <ModalBody>
                    <p>¿Hasta qué distancia quiere recibir notificaciones de sus amigos?</p>
                    <p>Marque "0" si desea desactivar las notificaciones</p>
                    <br></br>
                    {slider}
                </ModalBody>

                <ModalFooter>
                    <Button color="secondary" onClick={this.cerrarModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>
    

        return(
            <ul className="navbar-nav ml-auto"> 
                <li className="nav-item">
                    <Nav.Item onClick={this.abrirModal}  className="navbar-brand">
                        {ventanaModal}
                        <i className="material-icons">
                            <FontAwesomeIcon icon={faPeopleArrows} size="1x"/></i>
                    </Nav.Item>
                </li>
                <li className="nav-item">
                    <Nav.Link href="/amigos" data-testId="amigos" className="nav-link">Amigos</Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link href="/peticiones" data-testId="peticiones" className="nav-link">Peticiones</Nav.Link>
                </li>
                <LoggedOut className="btn btn-danger">
                <li className="nav-item">
                    <Nav.Link href="/logout" data-testId="logout" className="nav-item active">Cerrar Sesión</Nav.Link>
                </li>
                </LoggedOut>
                <LoggedIn>
                <Nav.Link href="/perfil" className="nav-link">Mi Perfil</Nav.Link>
                <AuthButton popup="https://solid.github.io/solid-auth-client/dist/popup.html"
                    login="Iniciar sesión con solid" logout="Cerrar Sesión" onClick={desconectar()} />
                </LoggedIn>

            </ul>
        );
    }
}