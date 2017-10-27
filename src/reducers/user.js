const defaultState = {
  user: {},
  code: ""
};

const user = (state = defaultState, action) => {
  switch(action.type) {
    case "SET_AUTH_CODE":
      return Object.assign({}, state, { code: action.code });

    case "LOGIN_USER":
      return Object.assign({}, state, { user: action.user });

    case "LOGOUT_USER":
      return Object.assign({}, state, { user: {} });

    default:
      return state;
  }
};

export default user;
