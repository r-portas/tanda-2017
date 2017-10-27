import React, { Component } from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import "./App.css";

import reducers from "./reducers";

// TODO: refactor imports
import Header from "./components/Header";
import User from "./components/User";
import Hello from "./components/Hello";
import LoginCallback from "./components/LoginCallback";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunk
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header/>

            <Route exact path="/user" component={User}/>
            <Route exact path="/" component={Hello}/>
            <Route path="/callback" component={LoginCallback}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
