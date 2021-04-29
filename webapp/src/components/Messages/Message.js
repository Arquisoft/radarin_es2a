import React, { Component } from "react";

export default class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
        };
        
    }


    render() {
        if (this.props.session===this.props.messageSender) {
            return (<div className="list-group-item list-group-item-success text-right">{this.state.text}</div>)
        }
        else {
            return (<div className="list-group-item list-group-item-warning text-left">{this.state.text}</div>)
        }
    }
}
