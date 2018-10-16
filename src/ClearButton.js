import React, { Component } from "react";

class ClearButton extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick} 
                className='ClearButton'
                data-value={this.props.value}
                data-size={this.props.size}>{this.props.label}
            </button>
        )
    }
}

export default ClearButton;