import React from 'react';
import './App.css';
import logo from './logo.svg';
import Welcome from './components/Welcome';
//import LoginConstants from "./components/LoginConstants";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registrer from './components/Registrer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        <div className="App-content">
          <Login />
          <ToastContainer/>
        </div>
        <Router>

<br></br>
<Link to='/registrarse'>Registrarse</Link>

  <Route path="/registrarse" render={() =>{
    return(
      <div>
        <Registrer/>
        <ToastContainer/>
      </div>
    )
  }}>
  </Route>
  
</Router>

      </div>
      


      
    )
  }
}

export default App;