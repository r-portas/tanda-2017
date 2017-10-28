import React, { Component } from "react";
import "./Landing.css";
import cup from "../imgs/cup.png";
import auth from "../util/auth";

class Landing extends Component {
  render() {
    return (
      <div className="Landing-section">
        <h2>Do you ever feel like just having a coffee break with your colleagues?</h2>
        <h4>Is it frustrating not knowing when they are free for a coffee break?</h4>
        <p>
          Don’t worry! It’s a brew-tiful day!
        </p>
        <p>
          You can now easily connect with your colleagues and organise a coffee break with the simple use of this web app.
          Just get all your colleagues to log in and add their availability.
        </p>
        <p>
          Simply just select the time and who you want to have your coffee break with and place an order for your coffee.
          When its time, just turn up and have your well deserved break!
        </p>

        <button className="Landing-login" onClick={this.login}>Login via Google</button>

        <h2>Connect with your co-workers!</h2>

        <p>
          Brew-tiful allows you to connect with your co-workers through
          the Tanda system, allowing you to form groups with peoples who do the same shifts as you or who work in the same department.
        </p>

        <img src={cup} style={{height: "80px"}}/>
      </div>
    )
  }

  login() {
    auth.authenticate();
  }
}

export default Landing;
