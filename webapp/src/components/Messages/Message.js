import React, { Component } from 'react'

export default class Message extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: this.props.text
        };
    }


    render() {
        return (
            <div>
                <p color='red'>{this.props.text}</p>
            </div>
        )
    }
}
