import React, { Component } from "react";
import "./WhoIsFree.css";

class WhoIsFree extends Component {
  render() {
    return (
      <div>
        <div className="inline-row">
          <h2>Who's Available</h2>
          <select>
            <option value="now">Now</option>
            <option value="1pm">1pm</option>
            <option value="2pm">2pm</option>
          </select>
        </div>
        <div className="users-container">

        </div>
      </div>
    );
  }
}

export default WhoIsFree;
