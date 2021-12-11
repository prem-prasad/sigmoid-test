import React, { useState } from 'react';
import jwt from 'jsonwebtoken';

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

  const secret = process.env.REACT_APP_JWT_SECRET;
  const generateAuthToken = () => {
    return jwt.sign(
      {
        username
      },
      secret,
      { expiresIn: '24h' }
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Replace password with env variable
    if (username === 'admin' && password === process.env.REACT_APP_PASS) {
      // Save token in localStorage
      localStorage.setItem('user_token', generateAuthToken());
      // Push to home
      props.history.push('/');
    } else {
      setAuthFailed(true);
    }

    // Clear form
    setUsername('');
    setPassword('');
  };

  return (
    <article className="login-container">
      <div className="login-form-container">
        <h1 className="header">LOGIN</h1>
        <form onSubmit={onSubmit} className="login-form">
          <TextField
            classes={{ root: classes.root }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
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
            Wrong username or password, please try again.
          </Alert>
        </Snackbar>
      </div>
    </article>
  );
};

export default Login;
