import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
// Okta
import { Security, ImplicitCallback } from "@okta/okta-react";

// Componentss
import HomePage from "./Components/Homepage";
import WithAuth from "./Components/WithAuth";

// Okta config object
const config = {
  issuer: "https://dev-640497.okta.com/oauth2/default",
  redirectUri: window.location.origin + "/implicit/callback",
  clientId: "0oa274tam6nSE47LW4x6",
  pkce: true
};

function App() {
  return (
    <div className="App">
      <Router>
        <Security {...config}>
          <Route path="/" exact={true} component={WithAuth} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </Security>
      </Router>

      {/* <NavBar /> */}
      {/* <div className="Routes">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/">
          Profile
        </NavLink>
        <NavLink exact to="/">
          Bookshelves{" "}
        </NavLink>
        <NavLink exact to="/">
          Discover
        </NavLink>

        <WithAuth />
      </div> */}
    </div>
  );
}

export default App;
