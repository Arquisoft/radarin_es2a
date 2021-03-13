import React from 'react';
import './App.css';
import logo from './logo.svg';
import Welcome from './components/Welcome';
import EmailForm from "./components/EmailForm";
import UserList from "./components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
import MapContainer from './components/MapContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends React.Component{
  constructor(){
    super()
    this.state = {users:[]}
  }

  refreshUsers(users){
    this.setState({users:users})
  }

  render() {
    return (
      <div className="App">
        <Router>

        <Link to='/'>Home</Link>
          <br></br>
        <Link to='/map'>Mapa</Link>


          <Route exact path='/' render={() => {
            return(
            <div>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Welcome name="ASW students" />
              </header>
              <div className="App-content">
                <EmailForm refreshUsers={this.refreshUsers.bind(this)} />
                <UserList users={this.state.users} />
                <a className="App-link"
                  href="https://github.com/pglez82/radarin_0"
                  target="_blank"
                  rel="noopener noreferrer">Source code</a>
              </div>
            </div>)
          }
          }>
          </Route>

          <Route path="/map" render={() =>{
            return(
            <div>
            <MapContainer
            />
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