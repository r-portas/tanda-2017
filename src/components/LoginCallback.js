import React, { Component } from "react";
import { withRouter } from 'react-router';
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

      props.history.push("/connect");
    }
  }

  render() {
    return (
      <div>
        <h2>Logging in...</h2>
      </div>
    )
  }
}

export default withRouter(connect()(LoginCallback));
