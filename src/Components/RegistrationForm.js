import React, { useState, useEffect } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import axios from 'axios';
import { withAuth } from '@okta/okta-react';
import { useInput } from '../hooks/useInput';

const apiUri = process.env.REACT_APP_API_URI;

const RegistrationView = props => {
  const [firstName, handleFirstName] = useInput('');
  const [lastName, handleLastName] = useInput('');
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');
  const [sessionToken, setSessionToken] = useState(null);

  const oktaAuth = new OktaAuth({ url: props.baseUrl });

  useEffect(() => {
    async function checkAuthentication() {
      const token = await props.auth.getIdToken();
      if (token) {
        setSessionToken({ token });
      }
    }

    checkAuthentication();
  }, [sessionToken, props.auth]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('SUBMITTED');
    const user = { firstName, lastName, email, password };
    axios
      .post(`${apiUri}/register`, user)
      .then(user => {
        oktaAuth
          .signIn({ username: email, password: password })
          .then(res => setSessionToken(res.sessionToken));
      })
      .catch(err => console.log(err));
  };

  if (sessionToken) {
    props.auth.redirect({ sessionToken });
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-element">
        <label>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => handleEmail(e.target.value)}
        />
      </div>
      <div className="form-element">
        <label>First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={e => handleFirstName(e.target.value)}
        />
      </div>
      <div className="form-element">
        <label>Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={e => handleLastName(e.target.value)}
        />
      </div>
      <div className="form-element">
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => handlePassword(e.target.value)}
        />
      </div>
      <input type="submit" id="submit" value="Register" />
    </form>
  );
};

export default withAuth(RegistrationView);
