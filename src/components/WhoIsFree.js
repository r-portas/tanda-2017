import React, { Component } from "react";
import User from "./User"
import "./WhoIsFree.css";

class WhoIsFree extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time1: ["Sophia", "Shalini", "Roy"],
      time2: ["Anabelle", "Bradley", "Leggy"],
      time3: ["Neha", "Anna", "Isha"],
      time: "time1",
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({time: e.target.value})
  }

  getUser (username) {
    return (
      <User name={username}/>
    )
  }

  getTime () {
    if (this.state.time === "time1") {
      return this.state.time1
    } else if (this.state.time === "time2") {
      return this.state.time2
    } else {
      return this.state.time3
    }
  }

  render () {
    return (
      <div>
        <div className="inline-row">
          <h2>Who's Available</h2>
          <select onChange={this.handleChange}>
            <option value="time1">Now</option>
            <option value="time2">1pm</option>
            <option value="time3">2pm</option>
          </select>
        </div>
        <div className="users-container">
          {this.getTime().map(x => this.getUser(x))}
        </div>
      </div>
    );
  }
}

export default WhoIsFree;
