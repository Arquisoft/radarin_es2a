import AdminView from './AdminView';
import {db} from '../api/firebase';
import { toast } from 'react-toastify';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

export const Admin = () => {

        const [users, setUsers] = useState([]);
        const [currentUser, setCurrentUser] =useState(''); // elemento seleccionado
    
        const addOrEditUser = async (userObject) => {
            if(currentUser === ''){
                await db.collection('users').doc().set(userObject)
                toast("Se ha añadido el usuario " + userObject.email + " a la base de datos",{type:'success'})
            }
            else{
                db.collection('users').doc(currentUser).update(userObject);
                toast("Se ha editado el usuario " + userObject.email + " en la base de datos",{type:'info'})
                setCurrentUser('')
            }
        }
    
    
        const getUsers = async() => {
            //get los obtiene pero no los actualiza automaticamente
            //const querySnapshot = await db.collection('links').get();
            db.collection('users').onSnapshot(
                (querySnapshot) => {
                    const  docs=[];
                    querySnapshot.forEach(doc => {
                        docs.push({...doc.data(), id: doc.id})
                    })
                setUsers(docs);
            });
        }
    
        const onDeleteUser= async (userObject) =>{
            if(window.confirm('Si pulsa aceptar se eliminará al usuario ' + userObject.email + ' de la base de datos.')){
                await db.collection('users').doc(userObject.id).delete();
                toast("Se ha eliminado el usuario " + userObject.email + " de la base de datos",{type:'error', autoClose: 3000});
            }
        }
    
    
        useEffect(() => {
            getUsers();
            console.log(users)
        }, [])
    
        return(
            <div>
                <div className="col-md-42 p-2">
                    <AdminView {...{addOrEditUser, currentUser, users}}/>
                </div>
                <div className="col-md-42 p-2">
                    {users.map((user) =>(
                        <div className="card mb-1" key={user.id}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4>{user.email}</h4>
                                    <div> 
                                        <i className="material-icons" style={{margin: '0.5em', paddingLeft: 0, listStyle: 'none'}}
                                           onClick={() =>setCurrentUser(user.id)}><FontAwesomeIcon icon={faEdit} size='2x'/></i>
                                        <i className="material-icons text-danger" onClick={()=>onDeleteUser(user)}>
                                           <FontAwesomeIcon icon={faTrashAlt} size='2x'/></i>
                                    </div>
                                </div>
                                <p>Contraseña: {user.password}</p>
                                <a href={user.pod + "/profile/card#me"} target="_blank" rel="react-hooks/exhaustive-deps">Ver POD</a>
                            </div>
                        </div>
                    ) 
                    )}
                </div>
            </div>
        )
    }
    
    export default Admin;