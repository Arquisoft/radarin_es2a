import React, { Component } from 'react'

export default class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
        };
        
    }


    render() {
        console.log("Las props")
        console.log(this.props)
        if (this.props.session===this.props.messageSender) {
            return (<div className="alert alert-primary textAlign-right">{this.state.text}</div>)
        }
        else {
            return (<div className="alert alert-warning textAlign-right">{this.state.text}</div>)
        }
    }
}
