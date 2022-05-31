import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TimePicker from '../ValuePickers'



it("TimePicker renders correctly", () => {
    const {queryByTestId} = render(<TimePicker />)
    expect(queryByTestId("Time-Picker")).toBeTruthy()
})