import React, { Component } from "react";

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