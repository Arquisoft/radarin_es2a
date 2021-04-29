import React from "react";
import RegistrerForm from "./RegistrerForm";
import { Container } from "@material-ui/core";
import Home from "../Home";
import {db} from "../../api/firebase";
import { toast } from "react-toastify";

function Registrer() {

    var registro = false;

    const addUser = async (details) => {
        if (details.email.length ===0 || details.password.length ===0 || details.pod.length === 0){
            toast("No pueden existir campos vacíos",
            {
                position: toast.POSITION.TOP_CENTER,
                type: "error",
                autoClose: 3000,
            })
        }
        else{
        if (details.password.length < 5 ){
            toast("La contraseña ha de tener mínimo 5 caracteres",
            {
                position: toast.POSITION.TOP_CENTER,
                type: "error",
                autoClose: 3000,
            })
        }
        else{
        if(await existeUsuario(details.email)===false){
            await db.collection('users').doc().set(details);
            toast("Usuario añadido correctamente",
            {
                position: toast.POSITION.TOP_CENTER,
                type: "success",
                autoClose: 3000,
            })
        }
        else{
        toast("Ya existe un usuario con ese email", {
            position: toast.POSITION.TOP_CENTER,
            type: "error",
            autoClose: 3000,
        });
        }
    }
    }
    }

    const existeUsuario = async (emailUsuario) => {
        const querySnapShot = await db.collection("users").get();
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
        <RegistrerForm  addUser={addUser}/>
        );
    

}

export default Registrer;