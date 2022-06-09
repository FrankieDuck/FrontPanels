import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react'
import LivePanel from "../LivePanel";

it("Should render the Live Panel Component", () => {
    const {queryByTestId} = render(<LivePanel />)
    expect(queryByTestId("Live-Panel")).toBeTruthy()
})