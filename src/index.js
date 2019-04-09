import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "components/App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import authReducer from "store/reducers/authReducer";

const store = createStore(authReducer);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
