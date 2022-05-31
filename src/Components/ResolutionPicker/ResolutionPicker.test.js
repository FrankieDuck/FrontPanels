import React from "react";
import { render, screen } from '@testing-library/react'
import ResolutionPicker from './ResolutionPicker'
import '@testing-library/jest-dom';


it('Should render a ResolutionPicker ', () => {
    render(<ResolutionPicker />)
    const resPicker = screen.getByRole('button', {name: /Resolution Auto/i})
    expect(resPicker).toHaveClass('MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-filled MuiInputBase-input MuiFilledInput-input')
    expect(resPicker).toBeInTheDocument()
})

