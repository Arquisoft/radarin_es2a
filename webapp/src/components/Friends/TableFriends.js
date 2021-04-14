import React, { useState } from 'react'
import DistanceBetween from './DistanceBetween'

const TableFriends = (props) => {

    const friends = props.friends

    return (
        <div className="table">
            <thead>
                <tr>
                    <th scope='col'>Email</th>
                    <th scope='col'>Distancia</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                {friends.map(friend => (
                    <div>
                        <th>{friend.nombre}</th>
                        <th><DistanceBetween friendEmail={friend.nombre} /></th>
                        <th>
                            <div className='row'>
                                <button className="btn btn-light" id="botonOpcion" onClick={() => NavigateToMessages(amigo.nombre)} data-testId="btnChatear" >
                                    <i className="material-icons">insert_comment</i>
                                </button>
                                <button className="btn btn-light" id="botonOpcion" onClick={() => NavigateToMap(amigo.nombre)} data-testId="btnUbicacion"  >
                                    <i className="material-icons">location_on</i>
                                </button>
                                <button className="btn btn-light" id="botonOpcion" onClick={() => eliminarAmigo(amigo.id)} data-testId="btnEliminar"  >
                                    <i className="material-icons">delete</i>
                                </button>
                            </div>
                        </th>
                    </div>
                )
                )
                }
            </tbody>

        </div>

    )
}
export defeult TableFriends;