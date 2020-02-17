// src/Home.js

import React, { Component } from "react";
import { withAuth } from "@okta/okta-react";

// const info = {
//   oktaDomain: 'dev-640497.okta.com',
//   client_id: 'accounts.google.com',
//   secret: 'gn9kIaF-BpAhUWlkyMJwM8EO',
//   response_type: 'id_token',
//   response_mode: 'fragment',
//   redirect_uri: window.location.origin + "/implicit/callback",
//   scope: 'email',
//   state: 'token',
//   nonce: 'token'

// }

{/* <a href = { `https://${info.oktaDomain}/oauth2/v1/authorize?&client_id=${info.client_id}&client_secret=${info.secret}&response_type=${info.response_type}&response_mode=${info.response_mode}&scope=${info.scope}&redirect_uri=${info.redirect_uri}%2F&state=${info.state}&nonce=${info.nonce}` }>Google</a> */}
// https://dev-640497.okta.com/login/login.htm?fromURI=/oauth2/v1/authorize/redirect?okta_key=Ukh9k04zXmTntvIzrQyYGBNkInFj6uk0Wsh32ZaNoow

export default withAuth(
  class Home extends Component {

    constructor(props) {

      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);

    }

    async checkAuthentication() {

      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }

    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    async login() {

      // Redirect to '/' after login
      this.props.auth.login("/");

    }

    async logout() {

      // Redirect to '/' after logout
      this.props.auth.logout("/");

    }

    render() {

      if (this.state.authenticated === null) return null;

      console.log(this.props.auth);

      return this.state.authenticated ? (

        <a onClick={this.logout}>Logout</a>

      ) : (

        <a onClick={this.login}>Login</a>

      );

    }
  }
);
