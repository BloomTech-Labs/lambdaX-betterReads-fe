import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";
import WithAuth from "./WithAuth";
// Components
import HomePage from "./Homepage";

function NavBar() {
  const [isAuthenticated, setAuth] = useState(false);

  return (
    <div className="App">
      <div className="Routes">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/">
          Profile
        </NavLink>
        <NavLink exact to="/">
          Bookshelves
        </NavLink>
        <NavLink exact to="/">
          Discover
        </NavLink>

        <WithAuth />

        {/* <button>Login</button>
        <button>Logout</button> */}
      </div>

      {/* Routes with attatched components */}
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default NavBar;
