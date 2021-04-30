import React, {useState} from "react";
import { Container, Button, Input} from "@material-ui/core";


function RegistrerForm (props) {
  const [details, setDetails] = useState({email: "", password: "", pod: ""});
  

  const submitHandler = e => {
    e.preventDefault();
    props.addUser(details);
    
  }

    return (
      <div className="container" style={{width: "500px"}}>
      <form className="card bg-white border-warning mx-auto w-75" onSubmit={submitHandler}>
          <div className="card-header bg-warning text-white font-weight-bold">Registrarse</div>
          <div className="card card-body">

            <div className="form-group mx-auto mb-3">
              <div className="input-group-text mx-0 mb-3">
                <Input  
                  className="form-control-lg w-100 bg-light" 
                  type="email" 
                  name="email" 
                  data-testid="emailRegistro" 
                  id="emailRegistro" 
                  placeholder="Correo Electrónico" 
                  onChange={e => setDetails({ ...details, email: e.target.value })} 
                  value={details.email} />
              </div>        
              <div className="input-group-text mx-0 mb-3">
                <Input 
                  className="form-control-lg w-100 bg-light"
                  type="password" 
                  name="password" 
                  id="passwordRegistro" 
                  data-testid="passwordRegistro" 
                  placeholder="Contraseña" 
                  onChange={e => setDetails({ ...details, password: e.target.value })} 
                  value={details.password} />
              </div>
              <div className="input-group-text mx-0 mb-3">
                <Input 
                  className="form-control-lg w-100 bg-light"
                  type="text" 
                  name="pod" 
                  id="pod"
                  data-testid="pod" 
                  placeholder="Direccion POD" 
                  onChange={e => setDetails({...details, pod:e.target.value})} 
                  value={details.pod} />
              </div>    
              <div >
                <Button 
                  data-testid="btnRegistro"
                  className="bg-warning btn btn-block text-white font-weight-bold" 
                  type="submit">
                    Registrarse
                </Button>
              </div>      
            </div>
          </div>
      </form>
    </div>
    )
}

export default RegistrerForm;