import React, { useState } from 'react';
import RegistrerForm from './RegistrerForm';
import { Container, Button } from '@material-ui/core';
import Home from './Home';
import {db} from '../api/firebase'

function Registrer() {

    const [user] = useState({ name: "", email: "", pod: "" });
    var registro = false;

    const addUser = (details) => {
       db.collection('users').doc().set(details);
       const query2 = db.collection('users').get();
       console.log(Array.from(query2))
    }

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