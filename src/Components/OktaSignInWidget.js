import React, { useRef, useEffect } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import { withAuth } from '@okta/okta-react';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

function OktaSignInWidget(props) {
  const el = useRef(null);

  useEffect(() => {
    const widget = new OktaSignIn({
      baseUrl: props.baseUrl,
      authParams: {
        pkce: true,
      },
    });
    widget.renderEl({ el }, props.onSuccess, props.onError);

    return function cleanup() {
      widget.remove();
    };
  }, []);

  return <div />;
}

export default withAuth(OktaSignInWidget);
