import React, { useEffect, useState } from 'react'
import { db } from '../../api/firebase'
import { useParams } from "react-router";

import Message from './Message';

export const ChatRoom = (props) => {

    const [messages, setMessages] = useState([]);
    const [messageToSend, setMessageToSend] = useState("");
    let { friend } = useParams();

    const loadMessages = async () => {
        db.collection('messages').
            where('user', 'in', [props.user,friend])
            .onSnapshot(
                (querySnapshot) => {
                    const docs = [];
                    querySnapshot.forEach(element => {
                        
                        if(element.data().friend===friend){
                            docs.push({ ...element.data(), id: element.id })
                        }
                        if(element.data().friend===props.user)
                            docs.push({ ...element.data(), id: element.id })
                    });
                    let sorted = docs.sort((a, b) => (a.date > b.date) ? 1 : -1)
                    if(sorted.length>15)
                        sorted = sorted.slice(-15)
                    setMessages(sorted)
                }
            )
        console.log("Se han cargado los mensajes")
    }


    useEffect(() => {
        loadMessages(props.user, friend);
        console.log(messages)
    }, [])


    const addMessage = async () => {
        const fecha = Date.now()
        console.log(fecha);
        const messageObject = {
            friend: friend,
            user: props.user,
            text: messageToSend,
            date: fecha
        }
        await db.collection('messages').doc().set(messageObject)
        console.log(messageObject)
        console.log("Se ha enviado el mensaje")
        setMessageToSend("")
    }

    function MessageList() {
        const messageList = messages.map((message) => (
            <Message text={message.text} session={props.user} messageSender={message.user}></Message>)
        )
        return (
            <div>{messageList}</div>
        )

    }

    const handleSubmit = e => {
        e.preventDefault()
        if(messageToSend!=""){
        console.log("Enviando mensaje")
        console.log(messageToSend)
        addMessage(messageToSend);
        }
    }

    const handleChange = (e) => {
        setMessageToSend(e.target.value);
        console.log(messageToSend)
    }


    return (
        <div className="container">
            <div className="card text-white bg-info">
                <div className="card-header bg-dark">{friend}</div>
                <div className="card-body">
                    <div className="list-group list-group-flush mb-1 h-50 bg-light">
                        <MessageList></MessageList>
                    </div>
                    <form className="card card-body " onSubmit={handleSubmit}>
                        <div className="input-group">
                            <textarea
                                rows="2"
                                className="form-control"
                                placeholder="Escribe un mensaje"
                                onChange={handleChange}
                                value={messageToSend}
                            />
                            <button className="btn btn-primary">
                                <i className="material-icons">insert_comment</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ChatRoom;
