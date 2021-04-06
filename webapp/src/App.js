import React, { useContext, useState } from 'react';
import './App.css';
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registrer from './components/Registrer';
import Admin from './components/Admin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Barra from './components/NavBar';
import { UserContext } from './api/UserContext';
import ReactDOM from 'react-dom';
 
function refreshUsers(users){
  this.setState({users:users})
}

function App(){
  const [users] = useState([]);
  const { user } = useContext(UserContext);
    
    return(
      <div className="App">
      <div id="barra">
        <Barra showMe={user.auth}/>
      </div>
        <Router>

          <Route path="/login" render={() =>{
            return(
              <div className="App-content">
                <Login/>
                <ToastContainer/>
              </div>
            ) 
          }}></Route>

          <Route path="/registrarse" component={Registrer}></Route>

          <Route path="/admin" component={Admin}></Route>
        </Router>
      </div>
    )
}

export default App;