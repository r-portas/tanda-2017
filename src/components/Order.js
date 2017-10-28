import React, { Component } from "react";

class Order extends Component {

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
        <h2>Order</h2>
        { this.renderUsers() }
      </div>
    );
  }
}

export default Order;
