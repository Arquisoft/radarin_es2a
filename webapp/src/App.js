import React from 'react';
import './App.css';
import logo from './logo.svg';
import Welcome from './components/Welcome';
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Welcome name="ASW students"/>
        </header>
        <div className="App-content">
          <Login />
        </div>
      </div>
    )
  }
}

export default App;