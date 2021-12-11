import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    background: `#11355f !important`,
    margin: '0 !important'
    // maxWidth: '475px'
  },
  input: {
    // color: '#427fc7',
    color: '#fff',
    '& .MuiInputBase-input.MuiFilledInput-input': {
      paddingTop: '6px',
      height: '40px'
    }
  }
});

export default function TextFieldComponent(props) {
  const classes = useStyles();

  return (
    <TextField
      {...props}
      classes={{ root: classes.root }}
      InputProps={{
        className: classes.input
      }}
      fullwidth="true"
      variant="filled"
      margin="dense"
    />
  );
}
