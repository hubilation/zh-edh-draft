import React from "react";
import SearchInput from "../components/SearchInput"
import SearchResults from "./SearchResults"

  // componentWillMount() {
  //   CardApi.GetSelectedCardsFromDb().then(c => {
  //     this.setState({ selectedCards: c });
  //   });
  //   CardApi.GetDraftQueueForPlayer().then(d => {});
  // }

  // addCardToQueue(index) {
  //   CardApi.QueueCard(this.state.cards[index], 1);

  //   this.setState({
  //     selectedCards: [...this.state.selectedCards, this.state.cards[index]]
  //   });
  //   console.log(this.state.selectedCards);
  // }

const CardSearch = () =>
  <div className="App container-fluid">
    <SearchInput />
    <SearchResults />
  </div>;

export default CardSearch;
