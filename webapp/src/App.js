import React from 'react';
import './App.css';
import logo from './logo.svg';
import Welcome from './components/Welcome';
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registrer from './components/Registrer';
import Admin from './components/Admin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class App extends React.Component{
  constructor(){
    super()
    this.state = {users:[]}
  }

  refreshUsers(users){
    this.setState({users:users})
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Welcome name="Bienvenid@"/>
        </header>


        <Router>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Radarin</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/registrarse">Registro</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav>
          </Navbar>

          <Route path="/login" render={() =>{
            return(
              <div className="App-content">
                <Login/>
                <ToastContainer/>
              </div>
            ) 
          }}></Route>

          <Route path="/registrarse" render={() =>{
            return(
              <div>
                <Registrer/>
                <ToastContainer/>
              </div>
            ) 
          }}></Route>

          <Route path="/admin" render={() =>{
            return(
              <div>
                <Admin/>
              </div>
            )
          }}></Route>
        </Router>
      </div>
    )
  }
}

export default App;