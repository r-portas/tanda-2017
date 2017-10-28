import React, { Component } from "react";
import { withRouter } from 'react-router';
import User from "./User"
import "./WhoIsFree.css";

import imgSophia from "../imgs/sophia.jpg";
import imgRoy from "../imgs/roy.png";
import imgShalini from "../imgs/shalini.png";
import imgGirl from "../imgs/girl.png";

class WhoIsFree extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time1: [{
        name: "Sophia",
        photo: imgSophia,
      }, {
        name: "Shalini",
        photo: imgShalini,
      }, {
        name: "Roy",
        photo: imgRoy,
      }],
      time2: [{
        name: "Anabelle",
        photo: imgGirl,
      }, {
        name: "Sophia",
        photo: imgSophia,
      }, {
        name: "Roy",
        photo: imgRoy,
      }],
      time3: [{
        name: "Anabelle",
        photo: imgGirl,
      }, {
        name: "Sophia",
        photo: imgSophia,
      }, {
        name: "Shalini",
        photo: imgShalini,
      }],
      time: "time1",
    }

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this);
  }

  handleChange (e) {
    this.setState({time: e.target.value})
  }

  getUser (obj) {
    return (
      <User selected name={obj.name} photo={obj.photo}/>
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

  submit() {
    this.props.history.push("/get")
  }

  render () {
    return (
      <div>
        <div className="inline-row">
          <h2>Who's Available</h2>
          <select onChange={this.handleChange}>
            <option value="time1">Now</option>
            <option value="time2">7pm</option>
            <option value="time3">8pm</option>
          </select>
        </div>
        <div className="users-container">
          {this.getTime().map(x => this.getUser(x))}
        </div>

        <button className="Landing-login" onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default withRouter(WhoIsFree);
