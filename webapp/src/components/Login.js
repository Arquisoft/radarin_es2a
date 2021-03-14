import React from 'react';
import { Container, Button, Input} from '@material-ui/core';
import EmailForm from './EmailForm';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      email:'',
      password:''
    };
  }
  
  loginUser = (email, password) =>{
    try {
      if(this.state.email.length < 6){
        alert("El email debe de tener al menos 7 caracteres")
        return;
      }
      if(this.state.password.length < 6){
        alert("La contraseña debe de tener al menos 7 caracteres")
        return;
      }
      EmailForm.fetchUsers();
    }
    catch (error) {
      console.log(error.toString())
    }
   }

  render() {
    return (
        <Container>
            <Input placeholder="Correo Electrónico" onChangeText={email => this.setState({email})} />
            <Input placeholder="Contraseña" onChangeText={password => this.setState({password})} />
            <Button onPress={()=> this.loginUser(this.state.email, this.state.password)}>
              Login
            </Button>
      </Container>
    );
  }
}

export default Login;