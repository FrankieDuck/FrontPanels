import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react'
import LiveView from "../LiveView";


it("Should render the live view containing tabs, picker and button component", () => {
    const {queryByTestId} = render(<LiveView />)
    expect(queryByTestId("Live-View")).toBeTruthy()
})