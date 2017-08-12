import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardResult from "./components/CardResult";
import SearchBar from "./components/SearchBar";
import CardApi from "./api/CardApi";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      selectedCards: [],
      searchInput: "",
      expandedCardIndex: -1,
      confirmSelectCardIndex: -1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.toggleConfirmDisplay = this.toggleConfirmDisplay.bind(this);
    this.addCardToQueue = this.addCardToQueue.bind(this);
  }

  componentWillMount() {
    CardApi.GetSelectedCardsFromDb().then(c => {
      this.setState({ selectedCards: c });
    });
    CardApi.GetDraftQueueForPlayer().then(d=>{
      debugger;
    })
  }

  handleChange(event) {
    var input = event.target.value;
    this.setState({ searchInput: input });
    if (input.length < 2) {
      this.setState({ cards: [] });
      return;
    }
    CardApi.GetDistinctCardsByName(input).then(cardResults => {
      this.setState({
        cards: cardResults,
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

  toggleConfirmDisplay(index) {
    if (this.state.confirmSelectCardIndex === index) {
      this.setState({
        confirmSelectCardIndex: -1
      });
      return;
    }
    this.setState({
      confirmSelectCardIndex: index
    });
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
          value={this.state.searchInput}
          placeholder="Select a card!"
          onChange={this.handleChange}
        />
        {this.state.cards.map((cardResult, index) =>
          <CardResult
            key={cardResult.id}
            index={index}
            card={cardResult}
            handleExpandClick={this.handleExpandClick}
            expandedCardIndex={this.state.expandedCardIndex}
            toggleConfirmDisplay={this.toggleConfirmDisplay}
            confirmSelectCardIndex={this.state.confirmSelectCardIndex}
            addCardToQueue={this.addCardToQueue}
          />
        )}
      </div>
    );
  }
}

export default App;
