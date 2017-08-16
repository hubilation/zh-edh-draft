import "babel-polyfill";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import draftApp from "./reducers";
import thunkMiddleWare from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleWare = createLogger();
let store = createStore(
  draftApp,
  applyMiddleware(thunkMiddleWare, loggerMiddleWare)
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById("root")
);
registerServiceWorker();
