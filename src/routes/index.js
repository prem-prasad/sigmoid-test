import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import CustomRoute from './CustomRoute';
// import LayoutContainer from 'containers/layout/LayoutContainer';
import { logout } from 'thunks/auth';
//Importing Components
import Login from 'screens/Auth/Login';
// import Home from 'screens/Home';
// import Gateway from 'screens/Gateway';
const Home = () => {
  return <div>Hello</div>;
};
const AppRoutes = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          {/*<ProtectedRoute exact path="/gateway" component={Gateway} />
          <ProtectedRoute exact path="/sensor" component={Gateway} /> */}
          <Route
            exact
            path="/sign-out"
            render={(props) => {
              dispatch(logout());
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
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRoutes;
