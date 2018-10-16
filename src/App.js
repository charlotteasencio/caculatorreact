import React, { Component } from 'react';
import './App.css';
import Button from "./Button.js"
import ClearButton from "./ClearButton"
import Buttons from "./Buttons.js"
import Display from "./Display.js"
import math from "mathjs";
import update from "immutability-helper";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      operations: []
    }
  }

calculateOperations = () => {
  let result = this.state.operations.join('')
  if (result) {
    result = math.eval(result)
    result = math.format(result, { precision: 10 })
    result = String(result)
    this.setState ({
      operations: [result]
    })
  }
}

handleClick = e => {
  const value=e.target.getAttribute('data-value')
  switch(value) {
    case 'clear': this.setState({operations: []})
      break
    case 'equal': this.calculateOperations()
      break
    default: 
      const newOperations = update(this.state.operations, {$push: [value],})
      this.setState({operations: newOperations,})
      break
}
}
  render() {
    return (
      <div className="App">
      <Buttons>
      <div className="toprow">
      <Display data={this.state.operations} />
      </div>
        <div className="row1" style={this.row1Style}>
        <Button onClick={this.handleClick} value="1" label="1" />
        <Button onClick={this.handleClick} value="2" label="2" />
        <Button onClick={this.handleClick} value="3" label="3" />
        <Button onClick={this.handleClick} value="/" label="/" />
        </div>
        <div className="row2">
        <Button onClick={this.handleClick} value="4" label="4" />
        <Button onClick={this.handleClick} value="5" label="5" />
        <Button onClick={this.handleClick} value="6" label="6" />
        <Button onClick={this.handleClick} value="*" label="x" />
        </div>
        <div className="row3">
        <Button onClick={this.handleClick} value="7" label="7" />
        <Button onClick={this.handleClick} value="8" label="8" />
        <Button onClick={this.handleClick} value="9" label="9" />
        <Button value="-" onClick={this.handleClick} label="-" />
        </div>
        <div className="equalsDiv">
        <Button value="0" onClick={this.handleClick} label="0" />
        <Button value="." onClick={this.handleClick} label="." />
        <Button value="equal" onClick={this.handleClick} label="=" />
        <Button value="+" onClick={this.handleClick} label="+" />
        <div className="secondRow">
        <ClearButton value="clear" onClick={this.handleClick} label="C" />
        </div>
        </div>
        </Buttons>
      </div>
    );
  }
}

export default App;