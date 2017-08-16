import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import CardSearch from "./containers/CardSearch";

const Root = ({ store }) =>
  <Provider store={store}>
    <Router>
      <Route path="/" component={CardSearch} />
    </Router>
  </Provider>;

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;
