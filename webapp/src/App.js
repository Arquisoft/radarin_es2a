import React from 'react';
import './App.css';
import logo from './logo.svg';
import Welcome from './components/Welcome';
//import LoginConstants from "./components/LoginConstants";
import Login from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css'
import Registrer from './components/Registrer/Registrer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/Navigation/Navbar';
import { MapContainer } from './components/Map/MapContainer';
import Friends from './components/Friends/Friends';
import Peticiones from './components/Friends/Peticiones';
import {UserContextProvider} from './context/UserContext'
import ReactDOM from 'react-dom';
import ChatRoom from './components/Messages/ChatRoom';

import Home from './components/Home'
import {useHistory} from 'react-router-dom'
import MapFriendLocation from './components/Map/MapFriendLocation';




function Logout () 
{
  const history = useHistory();
  window.sessionStorage.removeItem('user');
  history.push('/login');
  history.go(0)
}

class App extends React.Component {
  constructor() {
    super()
    this.state = { users: [] }
  }

  refreshUsers(users) {
    this.setState({ users: users })
  }

  

  render() {
    return (
      <UserContextProvider>
      <div className="App">
        <Router>
          <NavBar/>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Welcome name="Bienvenid@" />
          </header>
          <div className="App-content">
            <Route path='/login' component={Login} /> 
            <Route path='/logout' component={Logout} /> 
            <Route path="/registrarse" component={Registrer} />
            <Route path="/home" component={Home} />
            <Route path="/amigos" component={Friends} />
            <Route path="/peticiones" component={Peticiones} />
            <Route path="/mensajes/:friend">
                <ChatRoom user={window.sessionStorage.getItem('user')}/>
            </Route>
            <Route path="/map/:friend">
                <MapContainer user={window.sessionStorage.getItem('user')}/>
            </Route>
            <ToastContainer />
          </div>
          
        </Router>
      </div>
      
      </UserContextProvider>

    )
  }
}

export default App;