import React, { useState } from "react";
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const style = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '350px',
  minWidth: '250px',
  padding: '4px',
  margin: '30px 17px'
}


function DateAndTimePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
      style={style}
        variant="inline"
        ampm={false}
        label="From"
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        disablePast
        format="dd/MM/yyyy HH:mm"
      />
      <KeyboardDateTimePicker
      style={style}
        variant="inline"
        ampm={false}
        label="To"
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        disablePast
        format="dd/MM/yyyy HH:mm"
      />
      </MuiPickersUtilsProvider>
    </>
  );
}

export default DateAndTimePicker;
