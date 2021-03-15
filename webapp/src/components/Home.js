import React, {Component} from 'react';
import {Container, Button} from '@material-ui/core';


class Aboutscreen extends Component {
  render(){
    return(
      <Container>
        <h1>PÁGINA DE INICIO</h1>
        <Button
          onPress={()=> this.props.navigation.navigate('Login')}
          title="Página principal de la app"
          color=""
        />
      </Container>
    )
  }
}

export default Aboutscreen;