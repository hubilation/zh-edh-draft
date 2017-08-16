import InitialState from '../utilities/InitialState'

const searchResults = (state = InitialState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_INPUT":
      return { ...state, searchInput: action.text };
    case "REQUEST_SEARCH_RESULTS":
      return { ...state, fetchingSearchResults: true };
    case "RECEIVE_SEARCH_RESULTS":
      var cards = action.cards;
      var searchRequestDateTime = action.requestedAt;
      if(state.searchLastRequestedAt && action.requestedAt < state.searchLastRequestedAt){
        cards = state.cards;
        searchRequestDateTime = state.searchLastRequestedAt;
      }
      return {
        ...state,
        fetchingSearchResults: false,
        cards: cards,
        expandedCardIndex: -1,
        confirmSelectCardIndex: -1,
        searchLastRequestedAt: searchRequestDateTime
      };
    case "TOGGLE_EXPAND_CARD_DETAIL":
      var newIndex = -1;
      if (state.expandedCardIndex === -1) {
        newIndex = action.cardIndex;
      }
      return { ...state, expandedCardIndex: newIndex };
    case "TOGGLE_DISPLAY_CONFIRM_QUEUE":
      var newIndex = -1;
      if (state.confirmSelectCardIndex === -1) {
        newIndex = action.cardIndex;
      }
      return { ...state, confirmSelectCardIndex: newIndex };
    case "QUEUE_CARD":
      return { ...state, selectedCardIndex: action.cardIndex };
    default:
      return { ...state };
  }
};

export default searchResults;
