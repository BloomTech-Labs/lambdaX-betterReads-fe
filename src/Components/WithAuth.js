// src/Home.js
import OktaAuth from "@okta/okta-auth-js";
import React, { Component } from "react";
import { withAuth } from "@okta/okta-react";
import styled from 'styled-components';

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

      this.props.auth.login("/Profile");

    }

    // async googleLogin() {
      
    //   var authClient = new OktaAuth( config )

    //   .then(function( transaction ) {

    //     console.log( 'TRANSACTION' , transaction )
    //     authClient.session.setCookieAndRedirect(transaction.sessionToken);

    //   });

    // }

    async logout() {
      // Redirect to '/' after logout
      this.props.auth.logout("/");
    }

    render() {
      if (this.state.authenticated === null) return null;

      console.log( this.props.auth );

      return this.state.authenticated ? (

        <a onClick={this.logout}>Logout</a>

      ) : (
          <>
            <a onClick={this.login}>Login</a>
            {/* <a href={'https://dev-640497.okta.com/oauth2/v1/authorize?idp=0oa27sczcVpXEpD5Z4x6&client_id=0oa274tam6nSE47LW4x6&response_type=id_token&response_mode=fragment&scope=openid+email+profile&redirect_uri=http://localhost:3000/authorize/callback&state=Ty786UI&nonce=JK445'} onClick = { this.googleLogin }>Google</a> */}
          </>

        );
    }
  }
);

// https://dev-640497.okta.com/oauth2/v1/authorize?idp=0oa27sczcVpXEpD5Z4x6&client_id=0oa274tam6nSE47LW4x6&response_type=id_token&response_mode=fragment&scope=openid+email+profile&redirect_uri=http://localhost:3000/implicit/callback&state=Ty786UI&nonce=JK445

// https://dev-640497.okta.com/oauth2/v1/authorize?idp=0oa27sczcVpXEpD5Z4x6&client_id=0oa274tam6nSE47LW4x6&response_type=id_token&response_mode=fragment&scope=openid+email+profile&redirect_uri=https://dev-640497.okta.com/oauth2/v1/authorize/callback&state=Ty786UI&nonce=JK445

// https://dev-640497.okta.com/oauth2/v1/authorize?idp=0oa27sczcVpXEpD5Z4x6&client_id=0oa274tam6nSE47LW4x6&response_type=id_token&response_mode=fragment&scope=openid+email+profile&redirect_uri=http://localhost:3000/authorize/callback&state=Ty786UI&nonce=JK445




// https://dev-640497.okta.com/oauth2/v1/authorize?idp=0oa27sczcVpXEpD5Z4x6&client_id=0oa274tam6nSE47LW4x6&response_type=id_token&response_mode=fragment&scope=openid+email+profile&redirect_uri=http://localhost:3000/Profile&state=Ty786UI&nonce=JK445