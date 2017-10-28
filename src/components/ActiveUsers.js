import React, { Component } from "react";

class ActiveUsers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };

    fetch("http://fouridian.com:3000")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  renderUsers() {
    return Object.keys(this.state.users).map((user) => {
      return <div>{user}</div>
    });
  }

  render() {
    return (
      <div>
        <h2>Active Users</h2>
        { this.renderUsers() }
      </div>
    );
  }
}

export default ActiveUsers;
