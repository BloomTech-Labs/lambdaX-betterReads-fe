import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

import LoginForm from './LoginForm';

const LoginView = props => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    async function checkAuthentication() {
      const isAuthenticated = await props.auth.isAuthenticated();
      if (isAuthenticated !== authenticated) {
        setAuthenticated(isAuthenticated);
      }
    };

    checkAuthentication();
  }, [authenticated, props.auth]);

  if (authenticated === null) return null;

  return authenticated ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <LoginForm baseUrl={props.baseUrl} />
  );
};

LoginView.propTypes = {};

export default withAuth(LoginView);
