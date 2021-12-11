import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%'
  },
  root: {
    color: '#fff',
    background: `#11355f !important`,
    paddingTop: 10
  },
  icon: {
    fill: '#fff'
  }
}));

export default function Dropdown(props) {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = React.useState('');

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <FormControl
      variant="filled"
      className={classes.formControl}
      fullwidth="true">
      <Select
        classes={{ root: classes.root, icon: classes.icon }}
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={selectedItem}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
