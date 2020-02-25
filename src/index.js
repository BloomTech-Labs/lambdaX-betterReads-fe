import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Redux/Reducers/index";

// Router
import { BrowserRouter as Router, withRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const AppWithRouter = withRouter(App);

// Redux
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,

  rootElement
);
