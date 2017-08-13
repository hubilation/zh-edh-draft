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

const loggerMiddleWare = createLogger();
let store = createStore(
  draftApp,
  applyMiddleware(thunkMiddleWare, loggerMiddleWare)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
