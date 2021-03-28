import React, {useState} from 'react';
import { Container, Button, Input} from '@material-ui/core';


function RegistrerForm (props) {
  const [details, setDetails] = useState({email: "", password: "", pod: ""});

  const submitHandler = e => {
    e.preventDefault();
    props.addUser(details);
  }

    return (
      <form onSubmit={submitHandler}>
        <Container>
            <h2>Registrarse</h2>
            <Container>
              <Input type="email" name="email" id="emailRegistro" placeholder="Correo Electrónico" onChange={e => setDetails({...details, email:e.target.value})} value={details.email} />
            </Container>
            <Container>
              <Input type="password" name="password" id="passwordRegistro" placeholder="Contraseña" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} />
            </Container>
            <Container>
              <Input type="pod" name="pod" id="pod" placeholder="Direccion POD" onChange={e => setDetails({...details, pod:e.target.value})} value={details.pod} />
            </Container>
            <Button type="submit">Registrarse</Button>             
        </Container>
      </form>
    )
}

export default RegistrerForm;