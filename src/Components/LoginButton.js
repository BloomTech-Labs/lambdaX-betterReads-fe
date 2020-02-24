import React, { useState, useEffect } from 'react';
import { withAuth } from "@okta/okta-react";

function LoginButton(props) {
  const [authenticated, setAuthenticated] = useState(null);

  const checkAuthentication = async () => {
    const isAuthenticated = await props.auth.isAuthenticated();
    if (isAuthenticated !== authenticated) {
      setAuthenticated(isAuthenticated);
    }
  };

  useEffect(() => {
    async function checkAuth() {
      checkAuthentication();
    }
    checkAuth();
  }, []);

  useEffect(() => {
    async function checkAuth() {
      checkAuthentication();
    }
    checkAuth();
  }, [authenticated]);

  const login = async () => {
    // Redirect to '/' after login
    props.auth.login('/');
  };

  const logout = async () => {
    // Redirect to '/' after logout
    props.auth.logout('/');
  };

  if (authenticated === null) return null;

  console.log(props.auth);

  return authenticated ? (
    <a onClick={logout}>Logout</a>
  ) : (
    <a onClick={login}>Login</a>
  );
}

export default withAuth(LoginButton);