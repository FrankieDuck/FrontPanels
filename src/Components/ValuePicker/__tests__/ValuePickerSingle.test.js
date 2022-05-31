import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react'
import WeekPicker from '../WeekPicker';
import DayPicker from '../DayPicker';
import HourPicker from '../HourPicker';
import MinutePicker from '../MinutePicker';

it('Should render a Select Week Variable Component ', () => {
    render(<WeekPicker />)
    const weekPicker = screen.getByRole('button', {name: /Weeks ​/i})
    expect(weekPicker).toHaveClass('MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-filled MuiInputBase-input MuiFilledInput-input') 
})

it("should test the picked variable number", () => {
    const { debug, container } = render(<DayPicker />)
    console.log(container.querySelector('#demo-simple-select-filled'))
    // // debug()
    // screen.logTestingPlaygroundURL()
    fireEvent.change(container.querySelector('#demo-simple-select-filled'))
})


//I think this one below is the same as the one on line 9?
it("renders correctly", () => {
    const {queryByTestId} = render(<WeekPicker />)
    expect(queryByTestId("Week-Picker")).toBeTruthy()
})


it('Should render a Select Day Variable Component ', () => {
    render(<DayPicker />)
    const dayPicker = screen.getByRole('button', {name: /Days ​/i})
    expect(dayPicker).toHaveClass('MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-filled MuiInputBase-input MuiFilledInput-input') 
})


it('Should render a Select Hour Variable Component ', () => {
    render(<HourPicker />)
    const hourPicker = screen.getByRole('button', {name: /Hours ​/i})
    expect(hourPicker).toHaveClass('MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-filled MuiInputBase-input MuiFilledInput-input') 
})


it('Should render a Select Minute Variable Component ', () => {
    render(<MinutePicker />)
    const minutePicker = screen.getByRole('button', {name: /Mins ​/i})
    expect(minutePicker).toHaveClass('MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-filled MuiInputBase-input MuiFilledInput-input') 
})

it('Should fire event the change of picker variables', () => {

})



