/**
 * Utility functions for authentication
 */

function getCodeFromQueryString(queryString) {
  
  const params = new URLSearchParams(queryString);
  return params.get("access_token");
}

/**
 * Returns a dummy user object from the placeholder api
 */
function getUser(accessToken) {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${accessToken}`);

  return fetch('https://www.googleapis.com/oauth2/v2/userinfo', { headers })
    .then(resp => resp.json(), err => console.log(err))
}

function authenticate() {

  let redirectUrl = window.location.origin + "/callback/";

  if (process.env.PUBLIC_URL) {
    redirectUrl = window.location.origin + process.env.PUBLIC_URL + "/callback/";
  }

  console.log(redirectUrl);

  const params = new URLSearchParams();
  params.append('client_id', process.env.REACT_APP_GOOGLE_CLIENT_ID);
  params.append('scope', 'profile');
  params.append('include_granted_scopes', 'true');
  params.append('response_type', 'token');
  params.append('redirect_uri', redirectUrl);


  window.location.replace(process.env.REACT_APP_AUTH_URL + params.toString());
}

export default {
  getCodeFromQueryString,
  getUser,
  authenticate
}
