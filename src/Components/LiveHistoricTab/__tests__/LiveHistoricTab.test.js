import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react'
import LiveHistoricTabs from "../LiveHistoricTab";

// it("Should render the Live Panel Component", () => {
//     const {queryByTestId} = render(<LiveHistoricTabs />)
//     expect(queryByTestId("Live-Historic-Tabs")).toBeTruthy()
// })

it('Should render a live tab ', () => {
    const { getByRole } = render(<LiveHistoricTabs />)
    expect(screen.getByRole('tab', { name: /live/i }))  
    fireEvent.click(getByRole('tab', { name: /live/i }), {target: {value: 'LIVE'}})
    expect(getByRole('tab', { name: /live/i }).value).toEqual('LIVE')
})

it('Should render a historic tab ', () => {
    const { getByRole } = render(<LiveHistoricTabs />)
    expect(screen.getByRole('tab', { name: /historic/i })) 
    fireEvent.click(getByRole('tab', { name: /historic/i }), {target: {value: 'HISTORIC'}})
    expect(getByRole('tab', { name: /historic/i }).value).toEqual('HISTORIC')
})

