import React, {useEffect, useState} from "react";
import {db} from "../../api/firebase";


export const AdminUserForm= (props) => {

    const initialStateValues = {
        email: "",
        password: "",
        pod:""
    };

    const [values, setValues]  = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
        
    }


    const handleSubmit= e => {
        e.preventDefault();
        props.addOrEditUser(values);
        setValues({...initialStateValues});
    }
    

    const getUserById = async (id) => {
        const doc = await db.collection("users").doc(id).get();
        setValues({...doc.data()});
    }


    useEffect(() => {
        if(props.currentUser=== ""){
            setValues({...initialStateValues});
        }else{
            getUserById(props.currentUser)
        }
    },[props.currentUser]
    );


    return (
        <div> 
        <br></br> 
        <h1>Gestor de usuarios:</h1> 
        <form className="card card-body" onSubmit={handleSubmit}> 
            <p>{props.currentUser === "" ? "Nuevo usuario:" : "Editar usuario:"}</p> 
            <div className="form-group input-group"> 
                <div className="input-group-text bg-light"> 
                    <i>Email:</i> 
                </div> 
                <input  
                    type="text"  
                    className="form-control"  
                    name="email"  
                    placeholder="correoDePrueba@gmail.com" 
                    onChange={handleInputChange} 
                    value={values.email} 
                /> 
            </div> 
            <div className="form-group input-group"> 
                <div className="input-group-text bg-light"> 
                    <i>Contraseña:</i> 
                </div> 
                <input  
                    type="text"  
                    className="form-control"  
                    name="password"  
                    placeholder="*******" 
                    onChange={handleInputChange} 
                    value={values.password} 
                /> 
            </div> 
            <div className="form-group input-group"> 
                <div className="input-group-text bg-light"> 
                    <i>POD:</i> 
                </div> 
                <input  
                    type="text"  
                    className="form-control"  
                    name="pod"  
                    placeholder="Dirección del POD" 
                    onChange={handleInputChange} 
                    value={values.pod} 
                /> 
            </div> 

            <button className="btn btn-primary btn-block"> 
                {props.currentUser === "" ? "Guardar" : "Actualizar"} 
            </button> 
        </form> 
    </div> 
    )
};

export default AdminUserForm;
