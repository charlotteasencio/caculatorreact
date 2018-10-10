import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstValue:"",
      secondValue:"",
      operator: "",
      equals: ""
    }

    this.grabTheNumber = this.grabTheNumber.bind(this);
    this.grabOperator = this.grabOperator.bind(this);
    this.equals = this.equals.bind(this);
  }

grabTheNumber(event) {
    this.setState({firstValue: event.target.value})
    console.log(event.target.value)
}

grabOperator(event) {
 this.setState({operator: event.target.value})
 console.log(event.target.value)
}

equals(event) {
  this.setState({equals: event.target.value})
  console.log(event.target.value)
}

divStyle = {
  marginTop: "80px"
};

boxStyle = {
  marginLeft: "10px"
}

buttonStyleSubtract = {
  marginLeft: "10px",
  color: "#ffb5a8",
  background: "#ce5c48",
  fontSize: "25px",
  paddingRight: "12px",
  paddingLeft: "12px"
}

buttonStyleAdd = {
  color: "#75ff60",
  background: "#58c647",
  fontSize: "25px",
  paddingRight: "10px",
  paddingLeft: "10px"
}

buttonDivStyle = {
  marginTop: "10px"
}

buttonEqualsStyle = {
  marginTop: "5px",
  color: "#4286f4",
  background: "#ffffff",
  fontSize: "25px",
  paddingRight: "10px",
  paddingLeft: "10px"
}

numberStyle = {
  padding: "20px"
}

row1Style = {
  marginTop: "40px"
}

  render() {
    return (
      <div className="App">
        <div className="row1" style={this.row1Style}>
          <button onClick={this.grabTheNumber} value={1} style={this.numberStyle}>1</button>
          <button onClick={this.grabTheNumber} value={2} style={this.numberStyle}>2</button>
          <button onClick={this.grabTheNumber} value={3} style={this.numberStyle}>3</button>
        </div>
        <div className="row2">
          <button onClick={this.grabTheNumber} value={4} style={this.numberStyle}>4</button>
          <button onClick={this.grabTheNumber} value={5} style={this.numberStyle}>5</button>
          <button onClick={this.grabTheNumber} value={6} style={this.numberStyle}>6</button>
        </div>
        <div className="row3">
          <button onClick={this.grabTheNumber} value={7} style={this.numberStyle}>7</button>
          <button onClick={this.grabTheNumber} value={8} style={this.numberStyle}>8</button>
          <button onClick={this.grabTheNumber} value={9} style={this.numberStyle}>9</button>
        </div>
        <div className="buttonDiv" style={this.buttonDivStyle}>
          <button value="+" onClick={this.grabOperator} style={this.buttonStyleAdd}>+</button>
          <button value="-" onClick={this.grabOperator} style={this.buttonStyleSubtract}>-</button>
        <div className="equalsDiv">
          <button value="=" onClick={this.equals} style={this.buttonEqualsStyle}>=</button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
