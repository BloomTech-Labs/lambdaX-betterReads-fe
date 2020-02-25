import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
// Okta
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

// Componentss
import HomePage from './Components/Homepage';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import Login from './Components/Login';

function onAuthRequired({ history }) {
  history.push('/login');
}

// Okta config object
const config = {
  url: process.env.REACT_APP_OKTA_URL,
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  onAuthRequired: onAuthRequired,
  pkce: true,
  tokenManager: {
    storage: 'sessionStorage'
  }
};

function App() {

  return (
    <div className="App">
      <Router>
        <Security {...config}>
          <NavBar />

          {/* Loading Components based off a NavLink in NavBar */}
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/login" render={() => <Login baseUrl={config.url} />} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <SecureRoute path="/Profile" component={Profile} />
        </Security>
      </Router>
    </div>
  );
}

export default App;
