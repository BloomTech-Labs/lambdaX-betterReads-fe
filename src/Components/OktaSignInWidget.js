import React, { useRef, useEffect } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import { withAuth } from '@okta/okta-react';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

function OktaSignInWidget(props) {
  const el = useRef(null);

  useEffect(() => {
    console.log('el: ', el);
    const widget = new OktaSignIn({
      authScheme: 'SESSION',
      baseUrl: props.baseUrl,
      authParams: {
        pkce: true,
      },
      features: {
        registration: true,
      },
    });
    console.log('widget: ', widget);
    widget.renderEl({ el: el.current }, props.onSuccess, props.onError);

    return function cleanup() {
      widget.remove();
    };
  }, []);

  return <div />;
}

export default withAuth(OktaSignInWidget);
