import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import auth from "../util/auth";
import "./Header.css";

import logo from "../imgs/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  render() {
    return (
      <div>
        <header className="Header-header">
          <img className = "Header-logo" src={logo} alt="Logo"/>
          <div className="Header-row">
            <p>Logged in as: {this.props.user.name}</p>

            <ul className="Header-nav">
              <li>
                <NavLink exact to="/" activeClassName="Header-selected">Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/connect" activeClassName="Header-selected">Connect</NavLink>
              </li>
              <li>
                <NavLink exact to="/get" activeClassName="Header-selected">Get Coffee!</NavLink>
              </li>
              <li>
                <a className="Header-link" onClick={this.login}>Login</a>
              </li>
            </ul>
          </div>
        </header>

      </div>
    )
  }

  login() {
    auth.authenticate();
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
};

// `pure: false` tells react not to treat it as a pure function
export default connect(mapStateToProps, null, null, { pure: false })(Header);
