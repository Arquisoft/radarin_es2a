import React, { useState, useContext} from 'react';
import LoginForm from './LoginForm';
import Home from './Home';
import { Container, Button} from '@material-ui/core';
import {db} from '../api/firebase'
import { toast } from 'react-toastify';
import { UserContext } from '../api/UserContext';
import ReactDOM from 'react-dom';
import Barra from '../components/NavBar';

function Login() {
    const { login } = useContext(UserContext);

    const [user, setUser] = useState({email: "", pod:""});
    const [error, setError] = useState("");


    const user2 = {
        email : "",
        pod:""
    }

    const Login = async (details) => {
        const querySnapShot = await db.collection('users').get();
        var cambio = false
        querySnapShot.forEach(doc => {
            if (String(doc.data().email.localeCompare(details.email))=== String(0)){
                if (String(doc.data().password.localeCompare(details.password))=== String(0)){
                    login();
                    setUser({
                        email: details.email,
                        pod: details.pod
                    });
                    cambio = true;
                }
                }

        })
        if (!cambio){
            toast("El usuario y/o la contraseña no coinciden", {
                type: "error",
                autoClose: 3000,
            });
        }
      };

    const Logout = () => {
        
        setUser({
            email: "",
            pod: ""
        });
    }
    return (
        
        <Container className="LoginConstants">
            {(user.email !== "") ? ( 
                <Container>
                    <Home/>
                    <Button onClick={Logout}>Cerrar sesión</Button>
                </Container>
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </Container>
    );
}

export default Login