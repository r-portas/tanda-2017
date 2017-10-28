import React, { Component } from "react";
import "./WhoIsFree.css";

function User(props) {
  return (
    <div className="user-block">
      <p>{props.name}</p>

    </div>
  );
}

export default User;
