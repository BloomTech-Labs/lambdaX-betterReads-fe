function onAuthRequired({ history }) {
  history.push('/login');
}

export default {
  url: process.env.REACT_APP_OKTA_URL,
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  onAuthRequired: onAuthRequired,
  pkce: true,
  tokenManager: {
    storage: 'sessionStorage',
  },
};
