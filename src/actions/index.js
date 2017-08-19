import CardApi from "../api/CardApi";

export const updateSearchInput = text => {
  return {
    type: "UPDATE_SEARCH_INPUT",
    text
  };
};

export const requestSearchResults = searchTerm => {
  return {
    type: "REQUEST_SEARCH_RESULTS",
    searchTerm
  };
};

export function fetchSearchResults(searchTerm) {
  return function(dispatch) {
    dispatch(requestSearchResults(searchTerm));

    var requestedAt = Date.now();
    return CardApi.GetDistinctCardsByName(searchTerm).then(cards =>
      dispatch(receiveSearchResults(searchTerm, cards, requestedAt))
    );
  };
}

export const receiveSearchResults = (searchTerm, cards, requestedAt) => {
  return {
    type: "RECEIVE_SEARCH_RESULTS",
    searchTerm,
    cards,
    requestedAt
  };
};

export const toggleCardDetailExpand = cardIndex => {
  return {
    type: "TOGGLE_EXPAND_CARD_DETAIL",
    cardIndex
  };
};

export const toggleDisplayConfirmQueue = cardIndex => {
  return {
    type: "TOGGLE_DISPLAY_CONFIRM_QUEUE",
    cardIndex
  };
};

export const requestQueuedCardsForUser = userId =>{
  return {
    type: "REQUEST_QUEUED_CARDS_FOR_USER",
    userId
  }
} 

export const queueCard = cardIndex => {
  return {
    type: "QUEUE_CARD",
    cardIndex
  };
};
