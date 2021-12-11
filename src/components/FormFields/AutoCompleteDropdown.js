import React from 'react';

// Material UI
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles({
  root: {
    background: `#11355f !important`,
    margin: '0 !important'
  },
  popupIndicator: {
    color: '#fff'
  },
  inputRoot: {
    padding: 10,
    color: '#fff'
  }
});

const AutoCompleteDropdown = (props) => {
  const data = props.data;
  const [value, setValue] = React.useState(data[0].gatewayId);
  const [inputValue, setInputValue] = React.useState('');
  const classes = useStyles();
  return (
    <Autocomplete
      {...props}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        props.getGatewayValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      classes={{
        popupIndicator: classes.popupIndicator,
        inputRoot: classes.inputRoot
      }}
      disableClearable
      popupIcon={<KeyboardArrowDownIcon />}
      options={data}
      getOptionLabel={(option) => option.gatewayName}
      selectOnFocus
      renderInput={(params) => (
        <TextField
          classes={{ root: classes.root }}
          {...params}
          required
          InputLabelProps={{
            shrink: false
          }}
          margin="dense"
          variant="filled"
        />
      )}
    />
  );
};

export default AutoCompleteDropdown;
