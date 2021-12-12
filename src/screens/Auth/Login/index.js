import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';
import { login } from 'thunks/auth';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// Local
import './styles.scss';

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-root, .Mui-disabled': {
      borderRadius: 0,
      background: '#ECF6F9',

      '& :hover': {
        background: '#ECF6F9'
      },

      '& .MuiFilledInput-inputMarginDense': {
        background: '#ECF6F9',
        paddingTop: 7,
        paddingBottom: 7,
        height: 35
      }
    }
  }
});

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authFailed, setAuthFailed] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loginError, loginInAction, isLoggedIn } = useSelector((state) => ({
    loginError: state.auth.loginError,
    loginInAction: state.auth.loginInAction,
    isLoggedIn: state.auth.isLoggedIn
  }));

  useEffect(() => {
    if (Boolean(loginError.length)) setAuthFailed(true);
  }, [loginInAction]);

  useEffect(() => {
    if (localStorage.isLoggedIn==="true") props.history.push('/');
  }, [localStorage.isLoggedIn]);

  const onSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email: username,
      password: password,
      rememberMe: true
    };
    dispatch(login(payload));
    // Clear form
    // setUsername('');
    // setPassword('');
  };

  return (
    <article className="login-container">
      <div className="login-form-container">
        <h1 className="header">LOGIN</h1>
        <form onSubmit={onSubmit} className="login-form">
          <TextField
            classes={{ root: classes.root }}
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email"
            InputLabelProps={{
              shrink: true
            }}
            margin="dense"
            variant="filled"
          />
          <TextField
            classes={{ root: classes.root }}
            disabled={!username}
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            InputLabelProps={{
              shrink: true
            }}
            margin="dense"
            variant="filled"
          />
          <a className="forgot" href="#">
            FORGOT?
          </a>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <a className="sign-up" href="#">
            SIGN UP
          </a>
        </form>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={authFailed}
          autoHideDuration={2000}
          onClose={(e) => setAuthFailed(false)}>
          <Alert variant="filled" severity="error">
            {loginError}
          </Alert>
        </Snackbar>
      </div>
    </article>
  );
};

export default Login;
