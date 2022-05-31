import React from "react";
import { render, screen } from '@testing-library/react'
import DiscardUpdateButtons from './DiscardUpdateButtons'
import '@testing-library/jest-dom';



it('Should render a button with Discard ', () => {
    render(<DiscardUpdateButtons />)
    const discardButtons = screen.getByRole('button', {name: /DISCARD/i })
    expect(discardButtons).toHaveClass('MuiButtonBase-root MuiButton-root MuiButton-text')
})

it('Should render a button with Update', () => {
    render(<DiscardUpdateButtons />)
    const updateButton = screen.getByRole('button', {name: /UPDATE/i })
    expect(updateButton).toHaveClass('MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary')
})

// expect(buttonAsLink).toHaveAttribute('href', '/')