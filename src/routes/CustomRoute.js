import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const CustomRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // Verify token
        const token = localStorage.getItem('user_token');
        if (!token) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default CustomRoute;
