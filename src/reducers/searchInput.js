const searchInput = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_INPUT":
      return { ...state, searchInput: action.text };
    case "REQUEST_SEARCH_RESULTS":
      return { ...state, fetchingSearchResults: true };
  }
};
