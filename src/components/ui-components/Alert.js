import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function Alerts({ showClose = true, ...props }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <Collapse in={open}>
      <Alert
        action={
          showClose && (
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )
        }
        variant="filled"
        severity={`${props.type}`}>
        <AlertTitle>{props.msg}</AlertTitle>
        {Boolean(props.info) ? props.info : null}
      </Alert>
    </Collapse>
  );
}
