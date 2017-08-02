import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardResult from "./components/CardResult";
import MockResult from "./components/MockResult";
import SearchBar from "./components/SearchBar";
import mtg from "mtgsdk";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      searchInput: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var input = event.target.value;
    this.setState({ searchInput: input });
    if(input.length < 2){
      this.setState({cards: []});
      return;
    }
    var names = [];
    mtg.card.where({ name: input, gameFormat: 'commander' }).then(cardResults => {
      var distinct = [];
      cardResults.map(function(cardResult) {
        if (names.indexOf(cardResult.name) > -1) {
          return;
        }
        names.push(cardResult.name);
        distinct.push(cardResult);
      });
      this.setState({
        cards: distinct.map(cardResult =>
          <CardResult key={cardResult.id} card={cardResult} />
        )
      });
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <SearchBar
          value={this.state.searchInput}
          placeholder="Select a card!"
          onChange={this.handleChange}
        />
        {this.state.cards}
      </div>
    );
  }
}

export default App;
