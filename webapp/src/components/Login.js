import React from 'react';
import { AppLoading } from 'expo';
import { Container, Button, Header, Item, Input, Content, Form, Text } from 'native-base';
import EmailForm from 'EmailForm.js';

export default class App extends React.Component {
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
        alert( JSON.stringify(user))
      }
    catch (error) {
      console.log(error.toString())
    }
   }

  async componentDidMount() {
    this.fetchUsers()
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
        <Container>
        <Header />
        <Content padder>
        <Form>
            <Item>
              <Input placeholder="Correo Electrónico" onChangeText={email => this.setState({email})} />
            </Item>
            <Item last>
              <Input placeholder="Contraseña" onChangeText={password => this.setState({password})} />
            </Item>
            <Button onPress={()=> this.loginUser(this.state.email, this.state.password)}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}