import React from "react";
import SpinningLoader from "./SpinningLoader";
import SearchBar from "../containers/SearchBar";
import { connect } from "react-redux";

const UnconnectedSearchBar = ({isFetching}) =>
  <div style={{"position":"relative"}}>
    <SearchBar />
    {isFetching ? <SpinningLoader /> : <div/>}
  </div>;

const mapStateToProps = state => {
  return {
    isFetching: state.fetchingSearchResults
  };
};

const SearchInput = connect(mapStateToProps)(UnconnectedSearchBar);

export default SearchInput