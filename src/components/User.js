import React from "react";
import "./WhoIsFree.css";

function User(props) {

  let cn = "user-photo";

  if (props.coffeePhoto) {
    cn = "coffee-photo";
  }

  return (
    <div className="user-block">
      <img className={cn} src={props.photo} alt="User"/>
      <p className="user-name">{props.name}</p>

    </div>
  );
}

export default User;
