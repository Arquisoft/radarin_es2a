import {db} from "../../api/firebase";
import { toast } from "react-toastify";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faEdit} from "@fortawesome/free-solid-svg-icons";

export const AdminAdmin = () => {

        const [users, setUsers] = useState([]);
    
    
        const getUsers = async() => {
            db.collection("admins").onSnapshot(
                (querySnapshot) => {
                    const  docs=[];
                    querySnapshot.forEach(doc => {
                        docs.push({...doc.data(), id: doc.id});
                    })
                setUsers(docs);
            });
        }
    
        const onDeleteUser= async (userObject) =>{
            if(window.confirm("Si pulsa aceptar el usuario " + userObject.emailUser + " dejará de ser administrador.")){
                await db.collection("admins").doc(userObject.id).delete();
                toast(userObject.emailUser + " ya no es administrador",{type:"error", autoClose: 3000});
            }
        }
    
    
        useEffect(() => {
            getUsers();
            console.log(users)
        }, [])
    
        return(
            <div>
                <br></br>
                <h1>Gestor de administradores:</h1>
                <div className="col-md-42 p-2">
                    {users.map((user) =>(
                        <div className="card mb-1" key={user.id}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4>{user.emailUser}</h4>
                                    <div> 
                                        <i className="material-icons text-danger" onClick={()=>onDeleteUser(user)}>
                                           <FontAwesomeIcon icon={faTrashAlt} size="1x"/></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) 
                    )}
                </div>
            </div>
        )
    }
    
    export default AdminAdmin;