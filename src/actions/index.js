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

    return CardApi.GetDistinctCardsByName(searchTerm).then(cards =>
      dispatch(receiveSearchResults(searchTerm, cards))
    );
  };
}

export const receiveSearchResults = (searchTerm, cards) => {
  return {
    type: "RECEIVE_SEARCH_RESULTS",
    searchTerm,
    cards,
    receivedAt: Date.now()
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

export const queueCard = cardIndex => {
  return {
    type: "QUEUE_CARD",
    cardIndex
  };
};
