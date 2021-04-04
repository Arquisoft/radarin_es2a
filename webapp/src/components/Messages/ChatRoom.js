import React, { useEffect, useState } from 'react'
import { db } from '../../api/firebase'
import Message from './Message';

export const ChatRoom = (props) => {

    const [messages, setMessages] = useState([]);
    const [messageToSend, setMessageToSend] = useState("");

    const loadMessages = async () => {
        db.collection('messages').
            where('user', '==', props.user).
            where('friend', '==', props.friend)
            .onSnapshot(
                (querySnapshot) => {
                    const docs = [];
                    querySnapshot.forEach(element => {
                        docs.push({ ...element.data(), id: element.id })
                    });
                    setMessages(docs)
                }
            )
        console.log("Se han cargado los mensajes")
    }


    useEffect(() => {
        loadMessages(props.user, props.friend);
        console.log(messages)
    }, [])


    const addMessage = async () => {
        const messageObject = {
            friend: props.friend,
            user: props.user,
            text: messageToSend
        }
        await db.collection('messages').doc().set(messageObject)
        console.log(messageObject)
        console.log("Se ha enviado el mensaje")

    }

    function MessageList(props) {
        const messageList = messages.map((message) => (
            <Message text={message.text} sender={props.user === message.sender ? 'T' : 'F'}></Message>)
        )
        return (
            <ul>{messageList}</ul>
        )

    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Enviando mensaje")
        console.log(messageToSend)
        addMessage(messageToSend);

    }

    const handleChange = (e) => {
        setMessageToSend(e.target.value);
        console.log(messageToSend)
    }


    return (
        <div className="col-md-42 p-2">
            <div class="card text-white bg-primary">
                <div class="card-header bg-dark">{props.friend}</div>
                <div class="card-body">
                    <MessageList></MessageList>
                    <form className="card card-body" onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <textarea
                                rows="2"
                                className="form-control"
                                placeholder="Escribe un mensaje"
                                onChange={handleChange}
                                value={messageToSend}
                            />
                            <button className="btn btn-primary">
                                <i className="material-icons">add</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default ChatRoom;
