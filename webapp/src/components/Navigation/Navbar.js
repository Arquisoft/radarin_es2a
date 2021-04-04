import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom';

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
        if(!this.state.session){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/registrarse" className="nav-link">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">  
                        <li className="nav-item">
                                <Link to="/map" className="nav-link" >Mapa</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/amigos" className="nav-link" >Amigos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
    } 
}