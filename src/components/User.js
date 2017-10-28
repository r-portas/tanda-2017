import React, { Component } from "react";
import "./WhoIsFree.css";

function User(props) {
  return (
    <div className="user-block">
      <img className="user-photo" src={props.photo} alt="Photo"/>
      <p className="user-name">{props.name}</p>

    </div>
  );
}

export default User;
