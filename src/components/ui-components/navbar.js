import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { logout } from 'thunks/auth';

const Navbar = (props) => {
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(() => {
    localStorage.isLoggedIn === 'true' ? setIsLogIn(true) : setIsLogIn(false);
  }, [localStorage.isLoggedIn]);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    if (localStorage.isLoggedIn === 'true') {
      dispatch(logout(history));
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sigmoid Analytics
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            {isLogIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
