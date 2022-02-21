import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import WelcomePage from './WelcomePage';

test('renders learn react link inscription', () => {
  render(<WelcomePage/>);
  const inscripElement = screen.getByText(/inscription/i);
  expect(inscripElement).toBeInTheDocument();
  fireEvent.click(inscripElement);
});

test('renders learn react link connexion', () => {
  render(<WelcomePage/>);
  const connexElement = screen.getByText(/connexion/i);
  expect(connexElement).toBeInTheDocument();
  fireEvent.click(connexElement);
});

test('renders learn react link', () => {
  render(<WelcomePage/>);
  const middleElement = screen.getByTestId('middleText');
  expect(middleElement).toBeInTheDocument();
});