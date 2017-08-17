import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import CardSearch from "./containers/CardSearch";
import DraftQueue from "./containers/DraftQueue";
import "./Root.css";

const Root = ({ store }) =>
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={CardSearch} />
        <Route path="/queue" component={DraftQueue} />
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/queue">Queue</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
