import React, { Component } from "react";
import "./WhoIsFree.css";


class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: false
    }

    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect() {
    this.setState({selected: !this.state.selected});
  }

  render() {
    let block = "user-block";
    let cn = "user-photo";

    if (this.props.coffeePhoto) {
      cn = "coffee-photo";
    }

    if (this.state.selected) {
      block = "user-block user-selected";
    }

    return (
      <div className={block} onClick={this.toggleSelect}>
        <img className={cn} src={this.props.photo} alt="User"/>
        <p className="user-name">{this.props.name}</p>

      </div>
    );
  }
}

export default User;
