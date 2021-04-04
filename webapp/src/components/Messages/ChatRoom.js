import React, { Component } from 'react'
import {db} from '../../api/firebase'

export default class ChatRoom extends Component {

    constructor(props){
        super(props);

        const user= props.user
        const friend = props.friend
        
        this.state = {
            user: props.user,
            friend: props.friend
        }
        this.loadMessages(user,friend)
    };


    async loadMessages(user,friend){
        const messages = await db.collection('messages').
        where('user', '==', user).
        where('friend', '==', friend)
        .get()
        messages.forEach((doc) => {
            console.log(doc.data());
          });
    }
    
    


    render() {
        return (
            <div>
                <h1>La consola weon</h1>
            </div>
        )
    }
}
