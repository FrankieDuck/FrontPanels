import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react'
import BasicTextFields from '../InputField'

it('Should render a Select Week Variable Component ', () => {
    const { getByRole } = render(<BasicTextFields />)
    expect(getByRole('textbox', { name: /filled/i })).toBeInTheDocument()
    fireEvent.change(getByRole('textbox', { name: /filled/i }), {target: {value: 'intellisense.io'}})
    // screen.logTestingPlaygroundURL()
    expect(getByRole('textbox', { name: /filled/i }).value).toEqual('intellisense.io')
})
   

//fire events click, change etc