import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
// Okta
import { Security, ImplicitCallback } from "@okta/okta-react";

// Componentss
import HomePage from "./Components/Homepage";
import WithAuth from "./Components/WithAuth";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";

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
};

function App() {
  return (

    <div className="App">

      <Router>


        <Security {...config}>

          <NavBar/>

          {/* Loading Components based off a NavLink in NavBar */}
          <Route path="/" exact={true} component={ HomePage } />
          <Route path="/implicit/callback" component={ ImplicitCallback } />
          <Route path='/Profile' component = { Profile }/>

        </Security>

      </Router>

    </div>

  );

}

export default App;
