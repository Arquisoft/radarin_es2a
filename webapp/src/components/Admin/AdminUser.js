import AdminUserForm from "./AdminUserForm";
import {db} from "../../api/firebase";
import { toast } from "react-toastify";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faEdit} from "@fortawesome/free-solid-svg-icons";
import {getSolidDataset,getThing,getStringNoLocale} from "@inrupt/solid-client";
import {FOAF} from "@inrupt/vocab-common-rdf";
import { Button } from "reactstrap";

export const AdminUser = () => {

        const [users, setUsers] = useState([]);
        const [currentUser, setCurrentUser] =useState(""); // elemento seleccionado
    

        const existeUsuario = async (emailUsuario) => {
            const querySnapShot = await db.collection("users").get();
            var existeUsuario = false;
            querySnapShot.forEach((doc) => {
                if (String(doc.data().email.localeCompare(emailUsuario))=== String(0)){
                    existeUsuario = true;
                    }
            });
            if (existeUsuario){
                return true;
            }
            else{
                return false;
            }
          };
          
        const addOrEditUser = async (userObject) => {
            if(await existeUsuario(userObject.email)===true){
                toast("Ya existe un usuario con ese email", {
                    position: toast.POSITION.TOP_CENTER,
                    type: "error",
                    autoClose: 3000,
                });
            }
            else if(currentUser === ""){
                await db.collection("users").doc().set(userObject);
                toast("Se ha añadido el usuario " + userObject.email + " a la base de datos",{type:"success"});
            }
            else{
                db.collection("users").doc(currentUser).update(userObject);
                toast("Se ha editado el usuario " + userObject.email + " en la base de datos",{type:"info"});
                setCurrentUser("");
            }
        };
    
    
        const getUsers = async(option) => {
            db.collection("users").onSnapshot(
                (querySnapshot) => {
                    const  docs=[];
                    querySnapshot.forEach((doc) => {
                        docs.push({...doc.data(), id: doc.id});
                    });
                setUsers(docs);
            });
        };
    
        const onDeleteUser= async (userObject) => {
            if(window.confirm("Si pulsa aceptar se eliminará al usuario " + userObject.email + " de la base de datos.")){
                await db.collection("users").doc(userObject.id).delete();
                toast("Se ha eliminado el usuario " + userObject.email + " de la base de datos",{type:"error", autoClose: 3000});
            }
        };

        const existeAdmin = async (idUser) => {
            const querySnapShot = await db.collection("admins").get();
            var existeAdmin = false;
            querySnapShot.forEach((doc) => {
              if (String(doc.data().idUser.localeCompare(idUser)) === String(0)){
                existeAdmin = true;
              }  
            });
            return existeAdmin;
          };

        const admin= async (userObject) => {
            if (await existeAdmin(userObject.id)) {
                toast("El usuario " + userObject.email + " ya es administrador",{type:"error", autoClose: 3000});
            }
            else{
            const adminUser = {
                emailUser: userObject.email,
                idUser: userObject.id
            };
            await db.collection("admins").doc().set(adminUser);
            toast("El usuario " + userObject.email + " se ha añadido al grupo de administradores",{type:"success", autoClose: 3000});
            }
            
        };

        async function getName(usuario) {
            const myDataset = await getSolidDataset(usuario.pod.slice(0, -3));
            const profile = getThing(myDataset, usuario.pod);
            const fn = getStringNoLocale(profile, FOAF.name);
            return fn;
        }
    
    
        useEffect(() => {
            getUsers();
        }, []);
    
        return(
            <div>
                <div className="col-md-42 p-2">
                    <AdminUserForm {...{addOrEditUser, currentUser, users}}/>
                </div>

                <div className="col-md-42 p-2">
                    {users.map((user) => (
                        <div className="card mb-1" key={user.id}>
                            <div className="card-body">
                                {
                                    user.email==""?
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <h4>{user.pod}</h4>
                                            <div> 
                                                <i className="material-icons text-danger" onClick={() => onDeleteUser(user)}>
                                                    <FontAwesomeIcon icon={faTrashAlt} size="1x"/></i>
                                            </div>
                                        </div>
                                        <a href={user.pod} target="_blank" rel="react-hooks/exhaustive-deps">Ver POD</a>
                                    </div>
                                :
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <h4>{user.email}</h4>
                                            <div> 
                                                <i className="material-icons" style={{margin: "0.5em", paddingLeft: 0, listStyle: "none"}}
                                                    onClick={() => setCurrentUser(user.id)}><FontAwesomeIcon icon={faEdit} size="1x"/></i>
                                                <i className="material-icons text-danger" onClick={() => onDeleteUser(user)}>
                                                    <FontAwesomeIcon icon={faTrashAlt} size="1x"/></i>   
                                            </div>
                                        </div>
                                        <p>Contraseña: {user.password}</p>
                                    </div>
                                }
                                <br></br>
                                <button class="btn btn-dark" target="_blank" rel="react-hooks/exhaustive-deps" onClick={ () => admin(user)}>Hacer admin</button>
                            </div>
                        </div>
                    ) 
                    )}
                </div>
            </div>
        );
    };
    
    export default AdminUser;