import React, { useState, useEffect  } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {addUserPos} from '../components/Service/LocationService'
import {  LoggedIn, Value } from "@solid/react";
import DocumentTitle from "react-document-title";
import { db } from '../api/firebase'


function Home() {

  //Hay que ponerle las comillas en esos campos para no dar problemas a la parte de login
  const [details, setDetails] = useState({ email: "", password:"", pod: window.sessionStorage.getItem('pod') }); 

  const usuarioActivo = window.sessionStorage.getItem('user');

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    if(window.sessionStorage.getItem('user') !== null){
      var crd = pos.coords;
      addUserPos(crd.latitude,crd.longitude)
    }
  };

  async function Prueba(){
    if (window.sessionStorage.getItem('user') === null){
    var existeUsuario = false;
    const querySnapShot = await db.collection('users').get();
    querySnapShot.forEach(doc => {
      if (String(doc.data().pod.localeCompare(details.pod)) === String(0)) 
      existeUsuario = true;
      })
    if (existeUsuario!==true){
        db.collection('users').doc().set(details)
    }  
  }
}

useEffect(() => {
  Prueba()
},);
  
 
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options)

  if (window.sessionStorage.getItem('user') !== null || window.sessionStorage.getItem('pod') !== null) {
  return(

    <div>
      <h1>Dame tu localizacion</h1>
      <LoggedIn>
		
    <p>Bienvenido a Radarín, está autenticado como:  <Value src="user.name"/></p>

    
  </LoggedIn>
    </div>
  )  
  }else{
    return(
      <DocumentTitle title="Amigos">
          <div className="prueba">
            <h2 className="h2" data-testId="label">No estas logueado </h2>
            </div>
            </DocumentTitle>
            );
  }

}

export default Home;