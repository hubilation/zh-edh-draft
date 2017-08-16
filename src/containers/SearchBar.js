import { connect } from "react-redux";
import Input from "../components/Input";
import { updateSearchInput, fetchSearchResults } from "../actions";

const mapStateToProps = state => {
  return {
    value: state.searchInput,
    placeholder: "Select a card!"
  };
};

const mapDispatchToDrops = dispatch => {
  return {
    onChange: event => {
      dispatch(updateSearchInput(event.target.value));
      dispatch(fetchSearchResults(event.target.value));
    }
  };
};

const SearchBar = connect(
    mapStateToProps,
    mapDispatchToDrops
)(Input);

export default SearchBar