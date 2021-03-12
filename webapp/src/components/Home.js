import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


export default class Aboutscreen extends Component {
  render(){
    return(
      <View style={{ flex:1, alingItems: "center", justifyContent: 'center'}}>
        <Text>Sí estas registrado, haz click en Login</Text>
        <Button
          onPress={()=> this.props.navigation.navigate('Login')}
          title="Ir al Login de la App"
          color=""
        />
      </View>
    )
  }
}
