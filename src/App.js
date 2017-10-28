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
import Connect from "./components/Connect";
// import User from "./components/User";
import WhoIsFree from "./components/WhoIsFree";
import Landing from "./components/Landing";
import ActiveUsers from "./components/ActiveUsers";
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
            <div className="center-layout">
              <Route exact path="/" component={Landing}/>
               <Route exact path="/connect" component={Connect}/>
              <Route exact path="/whoisfree" component={WhoIsFree}/>
              <Route exact path="/get" component={ActiveUsers}/>
              <Route path="/callback" component={LoginCallback}/>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
