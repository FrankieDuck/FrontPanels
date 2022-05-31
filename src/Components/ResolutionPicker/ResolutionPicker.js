import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: 'Auto',
    label: 'Auto',
  },
  {
    value: '25%',
    label: '25%',
  },
  {
    value: '50%',
    label: '50%',
  },
  {
    value: '75%',
    label: '75%',
  },
  {
      value: '100%',
      label: '100%',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const style = {
 width: '95%',
 padding: '8px',
}

export default function ResolutionPicker() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('Auto');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off"> 
      <div>
        <TextField
          style={style}
          id="filled-select-currency"
          select
          label="Resolution"
          value={currency}
          onChange={handleChange}
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
