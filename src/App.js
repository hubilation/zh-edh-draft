import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchResults from "./containers/SearchResults";
import SearchBar from "./containers/SearchBar";
import CardApi from "./api/CardApi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    CardApi.GetSelectedCardsFromDb().then(c => {
      this.setState({ selectedCards: c });
    });
    CardApi.GetDraftQueueForPlayer().then(d => {});
  }

  addCardToQueue(index) {
    CardApi.QueueCard(this.state.cards[index], 1);

    this.setState({
      selectedCards: [...this.state.selectedCards, this.state.cards[index]]
    });
    console.log(this.state.selectedCards);
  }

  render() {
    return (
      <div className="App container-fluid">
        <SearchBar
          placeholder="Select a card!"
        />
        <SearchResults />
      </div>
    );
  }
}

export default App;
