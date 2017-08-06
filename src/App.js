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
      cardsRaw: [],
      searchInput: "",
      expandedCardIndex: -1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleChange(event) {
    var input = event.target.value;
    this.setState({ searchInput: input });
    if (input.length < 2) {
      this.setState({ cards: [] });
      return;
    }
    var names = [];
    mtg.card
      .where({ name: input, gameFormat: "commander" })
      .then(cardResults => {
        var distinct = [];
        cardResults.map(function(cardResult) {
          if (names.indexOf(cardResult.name) > -1) {
            return;
          }
          names.push(cardResult.name);
          distinct.push(cardResult);
        });
        this.setState({
          cardsRaw: distinct,
          expandedCardIndex: -1
        });
      });
  }

  handleExpandClick(index) {
    if (this.state.expandedCardIndex === index) {
      this.setState({
        expandedCardIndex: -1
      });
      return;
    }
    this.setState({
      expandedCardIndex: index
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
        {this.state.cardsRaw.map((cardResult, index) =>
            <CardResult
              key={cardResult.id}
              index={index}
              card={cardResult}
              handleExpandClick={this.handleExpandClick}
              expandedCardIndex={this.state.expandedCardIndex}
            />
          )}
      </div>
    );
  }
}

export default App;
