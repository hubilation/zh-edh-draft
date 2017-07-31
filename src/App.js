import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardResult from './components/CardResult';
import MockResult from './components/MockResult'


class App extends Component {
constructor(props){
  super(props);

  this.state = {
    card: MockResult
  }
}

  render() {
    return (
      <div className="App container-fluid">
        <CardResult card={this.state.card} />
      </div>
    );
  }
}

export default App;
