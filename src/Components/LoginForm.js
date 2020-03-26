import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import { useInput } from '../hooks/useInput';

const LoginView = props => {
  const [sessionToken, setSessionToken] = useState(null);
  const [error, setError] = useState(null);
  const [username, handleUsername] = useInput('');
  const [password, handlePassword] = useInput('');

  const oktaAuth = new OktaAuth({ url: props.baseUrl });

  const handleSubmit = e => {
    e.preventDefault();
    oktaAuth
      .signIn({
        username: username,
        password: password,
      })
      .then(res => {
        console.log('RES: ', res.user);
        setSessionToken(res.sessionToken);
      })
      .catch(err => {
        setError({ error: err.message });
        console.log(`${err.statusCode} error`, err);
      });
  };

  const errorMessage = error ? (
    <span className="error-message">{error.message}</span>
  ) : null;

  if (sessionToken) {
    props.auth.redirect({ sessionToken });
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage}
      <div className="form-element">
        <label>Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={e => handleUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={e => handlePassword(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </div>
    </form>
  );
};

export default withAuth(LoginView);
