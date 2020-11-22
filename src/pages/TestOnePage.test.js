import React from 'react'
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import TestOne from './TestOnePAge'

describe('App component', () => {
  beforeAll(() => {
    render(<TestOne />)
  })

  it('should have the right message in the dom', () => {
    const message = 'test'

    expect(screen.getByText(message)).toBeInTheDocument()
  })

  afterAll(cleanup)
})
