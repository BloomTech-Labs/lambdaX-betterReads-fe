import React, { useState, useEffect } from 'react';
import { withAuth } from '@okta/okta-react';

function LoginButton(props) {
  const [authenticated, setAuthenticated] = useState(null);

  const checkAuthentication = async () => {
    const isAuthenticated = await props.auth.isAuthenticated();

    if (isAuthenticated !== authenticated) {
      setAuthenticated(isAuthenticated);
    }
  };

  // no dependency array here works as desired.
  // shouldn't be a problem since this component is only used on login/logout
  useEffect(() => {
    async function checkAuth() {
      checkAuthentication();
    }
    checkAuth();
  });

  const login = async () => {
    // Redirect to '/' after login
    props.auth.login('/profile');
  };

  const logout = async () => {
    // Redirect to '/' after logout
    props.auth.logout('/');
  };

  if (authenticated === null) return null;

  // a tag needs to be a button
  // a tags require an 'href' attribute
  return authenticated ? (
    <a onClick={logout}>Logout</a>
  ) : (
    <a onClick={login}>Login</a>
  );
}

export default withAuth(LoginButton);
