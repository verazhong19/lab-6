import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttonIncrement = this.buttonIncrement.bind(this);
    this.buttonDecrease = this.buttonDecrease.bind(this);
    this.state = {
      count: 0
    };
    
  }

  buttonIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  buttonDecrease() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className="App">
      <Counter count={this.state.count} />
        <ButtonPlus onClick={this.buttonIncrement} />
        <ButtonMinus onClick={this.buttonDecrease} />
        
      </div>
    );
  }
}

class ButtonPlus extends React.Component {
  render() {
    return (
      <button className='btn btn-secondary' onClick={this.props.onClick}>
        +1
      </button>
    );
  }
}

class ButtonMinus extends React.Component {
  render() {
    return (
      <button className='btn btn-secondary' onClick={this.props.onClick}>
        -1
      </button>
    );
  }
}

class Counter extends React.Component {
  render() {
    return (
      <div className="Counter">
      <h1>{this.props.count}</h1>
      </div>
    );
  }
}

export default App;
