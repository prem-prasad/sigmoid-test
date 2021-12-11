import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        try {
          // Verify token
          const token = localStorage.getItem('user_token');
          const decoded = jwt.verify(
            token,
            process.env.REACT_APP_JWT_SECRET,
            (err, data) => {
              if (!err) {
                return data;
              }
            }
          );
          if (decoded) {
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
