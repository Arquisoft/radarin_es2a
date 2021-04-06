import React, {useState } from 'react';
import { Container, Button, Input} from '@material-ui/core';


function LoginForm ({Login, error}) {

  const [details, setDetails] = useState({email: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

    return (
      <form onSubmit={submitHandler}>
        <Container>
            <h2>INICIAR SESIÓN</h2>
            {(error !== "") ? (<Container className="error">{error}</Container>) : ""}
            <Container>
              <Input type="email" name="email" id="email" placeholder="Correo Electrónico" onChange={e => setDetails({...details, email:e.target.value})} value={details.email} />
            </Container>
            <Container>
              <Input type="password" name="password" id="password" placeholder="Contraseña" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} />
            </Container>
            <Button type="submit">Confirmar</Button>             
        </Container>
      </form>
    )
}

export default LoginForm;