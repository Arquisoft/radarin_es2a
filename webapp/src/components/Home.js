import React, {Component} from 'react';
import {Container, Button} from '@material-ui/core';
import MapContainer from './MapContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Friends from './Friends/Friends'


class Aboutscreen extends Component {
  render(){
    return(
      <Container>
        <h1>PÁGINA DE INICIO</h1>

        <Button
          onClick={()=> this.props.navigation.navigate('Login')}
          title="Página principal de la app"
          color="default"
        />

        <br></br>
        <br></br>
    <Router>

      
        <Link to='/map'>Mapa</Link>
        <br></br>
        <Link to='/amigos'>Amigos</Link>

          <Route path="/map" render={() =>{
            return(
              <div>
                <MapContainer/>
              </div>
            )
          }}>
          </Route>
          <Route path="/amigos" render={() =>{
            return(
              <div>
                <Friends/>
              </div>
            )
          }}>
          </Route>
          
        </Router>

      </Container>



    )
  }
}

export default Aboutscreen;