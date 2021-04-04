import React, { Component } from 'react'

export default class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            sender: this.props.sender
        };
    }


    render() {
        
        if (this.props.sender==='T') {
            return (<div style={{background:"grey"}}><p style={{ textAlign:"right"}}>{this.state.text}</p></div>)
        }
        else {
            return (<div><p style={{color:"red", textAlign:"left"}}>{this.state.text}</p></div>)
        }
    }
}
