import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthCode, fetchUser } from "../actions";
import auth from "../util/auth";

class LoginCallback extends Component {
  constructor(props) {
    super(props);

    let code = "";

    if (props && props.location && props.location.hash) {
      const qs = props.location.hash.substring(1);
      code = auth.getCodeFromQueryString(qs);
      props.dispatch(setAuthCode(code));
      props.dispatch(fetchUser(code));
    }
  }

  render() {
    return (
      <div>
        <h2>Main page</h2>
      </div>
    )
  }
}

export default connect()(LoginCallback);
