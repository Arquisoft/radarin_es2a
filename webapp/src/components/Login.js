import React, {useState} from 'react';
import LoginForm from './LoginForm';
import Home from './Home';
import { Container, Button} from '@material-ui/core';

function Login() {
    const admin = {
        email: "user@uniovi.es",
        password: "user"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {

        if(details.email === admin.email && details.password === admin.password) {
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        } else {
            setError("Existe algún campo inválido");
        }
            
    }

    const Logout = () => {
        setUser({
            name: "",
            email: ""
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