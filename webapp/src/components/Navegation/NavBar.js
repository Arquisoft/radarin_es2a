import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import UserBar from "./UserBar";
import HomeBar from "./HomeBar";
import AdminBar from "./AdminBar";
import {db} from "../../api/firebase";
import {  LoggedIn, LoggedOut} from "@solid/react";





export default class NavBar extends Component {
    state = {
        session: false,
        admin: false,
    }

    

    

     async componentDidMount(){
        const usuario = window.sessionStorage.getItem("user");
        const pod = window.sessionStorage.getItem("pod");
        if(usuario !== null ){
            this.setState({
                session: true
            });

        const querySnapShot = await db.collection("admins").get();
        querySnapShot.forEach((doc) => {
          if (String(doc.data().emailUser.localeCompare(window.sessionStorage.getItem("user"))) === String(0)) {
            this.setState({
                admin: true
            });
          }
        });
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
                            <FontAwesomeIcon icon={faHome} size="1x"/></i>
                    </Nav.Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                         
                        
                            <LoggedIn>
                                <UserBar/>
                            </LoggedIn>
                            <LoggedOut>
                            {    
                            this.state.session?
                            <UserBar/>:
                            <HomeBar/>
                            }
                            </LoggedOut>
                    </div>
                </div>
            </Navbar>

            <AdminBar adm={this.state.admin}/>
            </div>
        );
    } 
}