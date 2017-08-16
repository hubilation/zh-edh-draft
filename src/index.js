import "babel-polyfill";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import draftApp from "./reducers";
import InitialState from "./utilities/InitialState";
import thunkMiddleWare from "redux-thunk";
import { createLogger } from "redux-logger";
import { Route } from "react-router";
import {BrowserRouter as Router} from "react-router-dom";

const loggerMiddleWare = createLogger();
let store = createStore(
  draftApp,
  applyMiddleware(thunkMiddleWare, loggerMiddleWare)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
