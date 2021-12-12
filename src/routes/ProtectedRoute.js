import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        try {
          // Verify token
          const token = localStorage.getItem('user_token');
          if (token) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: '/sign-out',
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        } catch (error) {
          <Redirect
            to={{
              pathname: '/sign-out',
              state: {
                from: props.location
              }
            }}
          />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
