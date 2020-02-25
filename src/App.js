import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";

// Okta
import { Security, ImplicitCallback  } from "@okta/okta-react";

// Componentss
import HomePage from "./Components/Homepage";
import WithAuth from "./Components/WithAuth";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import withAuth from "@okta/okta-react/dist/withAuth";

// Okta config object
const config = {
  issuer: "https://dev-640497.okta.com/oauth2/default",
  redirectUri: window.location.origin + "/implicit/callback",
  clientId: "0oa274tam6nSE47LW4x6",
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
