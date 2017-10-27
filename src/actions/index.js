import auth from "../util/auth";

export const setAuthCode = code => {
  return {
    type: "SET_AUTH_CODE",
    code
  };
};

export const loginUser = user => {
  return {
    type: "LOGIN_USER",
    user
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER"
  };
};

/**
 * Fetch the user from the API then update the store
 */
export function fetchUser(accessToken) {
  return function(dispatch) {
    auth.getUser(accessToken)
      .then(json => dispatch(loginUser(json)));
  };
}
