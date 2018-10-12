import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick} 
                className='Button'
                data-value={this.props.value}
                data-size={this.props.size}>{this.props.label}
            </button>
        )
    }
}

export default Button;