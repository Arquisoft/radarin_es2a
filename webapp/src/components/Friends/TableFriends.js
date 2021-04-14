import React, { useState, useEffect } from 'react'
import distance from '../Service/DistanceService'
import DistanceBetween from './DistanceBetween'

const TableFriends = (props) => {

    const friends = props.friends
    const [friendWithDistance, setFriendWithDistance] = useState([])


    const load =async () =>{
        const docs = []
        friends.forEach(element => {
            docs.push({
                nombre: element.nombre,
                distance: <DistanceBetween friendEmail= {element.nombre}/>
            })
            setFriendWithDistance(docs)
        });
    }


    const añadirKmDistancia = (distancia) => {
        if(!isNaN(distancia))
            return distancia + "Km"
        else 
            return distancia
    }



    useEffect(() => {
        load()
      }, []);

    return (
        <div className="table table-striped mydatatable">
            <thead>
                <tr>
                    <th scope='col'>Email</th>
                    <th scope='col'>Distancia</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                {friendWithDistance.map(friend => (
                    <tr>
                        <th className="align-middle">{friend.nombre}</th>
                        <th className="align-middle">{añadirKmDistancia(friend.distance)}</th>
                        <th>
                            <div>
                                <button
                                    className="btn btn-success" id="botonOpcion"
                                    onClick={() => props.NavigateToMessages(friend.nombre)}
                                    data-testId="btnChatear" >
                                    <i className="material-icons">insert_comment</i>
                                </button>
                                <button
                                    className="btn btn-info"
                                    id="botonOpcion"
                                    onClick={() => props.NavigateToMap(friend.nombre)}
                                    data-testId="btnUbicacion"  >
                                    <i className="material-icons">location_on</i>
                                </button>
                                <button
                                    className="btn btn-danger"
                                    id="botonOpcion"
                                    onClick={() => props.eliminarAmigo(friend.id)}
                                    data-testId="btnEliminar"  >
                                    <i className="material-icons">delete</i>
                                </button>
                            </div>
                        </th>
                    </tr>
                )
                )
                }
            </tbody>

        </div>

    )
}
export default TableFriends;