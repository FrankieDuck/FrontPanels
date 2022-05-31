import * as React from 'react';
import WeekPicker from './WeekPicker';
import DayPicker from './DayPicker';
import HourPicker from './HourPicker';
import MinutePicker from './MinutePicker';

export default function TimePicker() {
    return (
      <>
      <div data-testid="Time-Picker" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "flex-start",}}>
        <WeekPicker />
        <DayPicker />
        <HourPicker />
        <MinutePicker />
      </div>
      </>
    )
  }
  