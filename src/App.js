import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardResult from './components/CardResult';
import MockResult from './components/MockResult'


class App extends Component {
constructor(props){
  super(props);

  this.state = {
    cards: MockResult.map((result)=><CardResult card={result} />)
  }

}

  render() {
    return (
      <div className="App container-fluid">
        {this.state.cards}
      </div>
    );
  }
}

export default App;
