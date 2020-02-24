import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import OktaSignInWidget from './OktaSignInWidget';

function Login(props) {
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
  }, [authenticated]);

  const onSuccess = (res) => {
    if (res.status === 'SUCCESS') {
      return props.auth.redirect({
        sessionToken: res.session.token,
      });
    } else {
      console.log(res.user);
      return;
    }
  };

  const onError = (err) => {
    console.log('error logging in', err);
  };

  if (authenticated === null) return null;

  return authenticated ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <OktaSignInWidget
      baseUrl={props.baseUrl}
      onSuccess={onSuccess}
      onError={onError}
    />
  );
}

export default withAuth(Login);
