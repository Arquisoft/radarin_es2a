import React, { useState } from 'react';
import RegistrerForm from './RegistrerForm';
import { Container, Button } from '@material-ui/core';
import Home from './Home';
import {db} from '../api/firebase'

function Registrer() {

    var registro = false;

    const addUser = async (details) => {
        if (details.email.length ===0 || details.password.length ===0 || details.pod.length === 0){
            console.log("No pueden existir campos vacios")
        }
        else{
        if (details.password.length < 5 ){
            console.log("La contraseña ha de tener mínimo 5 caracteres")
        }
        else{
        if(await existeUsuario(details.email)===false){
            await db.collection('users').doc().set(details);
            console.log("Usuario añadido correctamente")
        }
        else{
        console.log("Ya existe un usuario con esa dirección de correo")
        }
    }
    }
    }

    const existeUsuario = async (emailUsuario) => {
        const querySnapShot = await db.collection('users').get();
        var existeUsuario = false;
        querySnapShot.forEach(doc => {
            if (String(doc.data().email.localeCompare(emailUsuario))=== String(0)){
                existeUsuario = true;
                }
        })
        if (existeUsuario){
            return true;
        }
        else{
            return false;
        }
      };

    if (registro) {
        return (
        <Container className="RegistrerConstants">
                <Container>
                    <Home />
                </Container> 
        </Container>
    );
    }
        return (
        <RegistrerForm addUser={addUser}/>
        );
    

}

export default Registrer