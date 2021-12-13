import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ProtectedRoute from './ProtectedRoute';
import { logout } from 'thunks/auth';
//Importing Components
import Login from 'screens/Auth/Login';
import Dashboard from 'screens/dashboard';
import FullLayout from 'layout/fullLayout';
const history = createBrowserHistory();

const AppRoutes = () => {
  const dispatch = useDispatch();

  return (
    <Router history={history} basename="/">
      <Switch>
      <FullLayout>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />

        <Route
          exact
          path="/sign-out"
          render={(props) => {
            dispatch(logout(history));
            return (
              <Redirect
                to={{
                  pathname: '/login',
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }}
        />
        <Redirect to={{pathname: "/"}} />
      </FullLayout>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
