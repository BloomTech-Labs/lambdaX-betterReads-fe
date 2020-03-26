import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
// Okta
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import config from './app.config';

// Componentss
import HomePage from './Components/Homepage';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import LoginView from './Components/LoginView';


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Loading Components based off a NavLink in NavBar */}
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/login" render={() => <LoginView baseUrl={config.url} />} />
      <Route path="/implicit/callback" component={ImplicitCallback} />
      <SecureRoute path="/profile" component={Profile} />
    </div>
  );
}

export default App;
