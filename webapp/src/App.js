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
import ChatRoom from './components/Messages/ChatRoom';
import Message from './components/Messages/Message'


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
      <div>
        <ChatRoom user='amigo' friend='lucas' />
      </div>




    )
  }
}

export default App;