import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostEditor from './components/PostEditor';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header/>
      </div>
    );
  }
}

export default App;
