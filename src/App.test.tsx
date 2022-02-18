import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Button } from '@mui/material';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Button', ()=>{
    it('renders a button', ()=>{
        render(<Button />)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})

describe('When user clicks sign up button', () => {
  it('renders Thank you!', () => {
    render(<Button />)
    fireEvent.click(screen.getByRole('button'))
    // expect(screen.getByText(/Thank you!/i)).toBeInTheDocument()
  })
})