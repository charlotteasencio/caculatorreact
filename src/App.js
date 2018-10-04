import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstValue: 0,
      secondValue: 0,
      operator: " ",
    }

    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
  }

  handleChangeOne(event) {
    this.setState({firstValue: event.target.value})
    console.log(event.target.value)
}

handleChangeTwo(event) {
  this.setState({secondValue: event.target.value})
  console.log(event.target.value)
}

add() {
 console.log("+")
}

subtract() {
  console.log("-")
}

equals() {
  console.log("=")
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

  render() {
    return (
      <div className="App">
        <div className="inputDiv" style={this.divStyle} >
          <input type="text" onChange={this.handleChangeOne} value={this.state.value} />
          <input type="text" onChange={this.handleChangeTwo} value={this.state.value} style={this.boxStyle}/>
        </div>
        <div className="buttonDiv" style={this.buttonDivStyle}>
          <button type="submit" onClick={this.add} style={this.buttonStyleAdd}>+</button>
          <button type="submit" onClick={this.subtract} style={this.buttonStyleSubtract}>-</button>
        <div className="equalsDiv">
          <button type="submit" onClick={this.equals} style={this.buttonEqualsStyle}>=</button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
