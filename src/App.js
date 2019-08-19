import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css'
import './App.css';

class Room extends Component {
  
  state = {
    isLit : true,
    temp: 22
  }

flipLight = () => {
  this.setState({
    isLit: !this.state.isLit
  })
}

on = () =>{
  this.setState({
    isLit: true,
  })
}

off = () => {
  this.setState({
    isLit: false
  })
}

inctemp = () => {
  this.setState({
    temp : this.state.temp + 1
  })
}

decTemp = () => {
  this.setState({
    temp : this.state.temp - 1
  })
}

  render() {
    const brightness = this.state.isLit ? "lit" : "dark"
    return(
      <div className={`room ${brightness}`}>
        The room is {brightness}
        <br/>
        <button onClick={this.flipLight}>Flip</button>
        <button onClick={this.on}>On</button>
        <button onClick={this.off}>Off</button>
        <br/>
        The room temperature is {this.state.temp}
        <br/>
        <button onClick={this.inctemp}>+</button>
        <button onClick={this.decTemp}>-</button>
      </div>
    );
  }
}

export default Room;
