import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

test('renders navbar', () => {
  render(<AboutUs />);
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

test('renders section with media contact components', () => {
  render(<AboutUs />);
  const frameComponent1Element = screen.getByTestId('frame-component-1');
  const ourVisionElement = screen.getByTestId('our-vision');
  expect(frameComponent1Element).toBeInTheDocument();
  expect(ourVisionElement).toBeInTheDocument();
});

test('renders secondary button component', () => {
  render(<AboutUs />);
  const secondaryButtonElement = screen.getByTestId('secondary-button');
  expect(secondaryButtonElement).toBeInTheDocument();
});

test('renders backend component', () => {
  render(<AboutUs />);
  const backendElement = screen.getByTestId('backend-component');
  expect(backendElement).toBeInTheDocument();
});

test('renders section with CTA content', () => {
  render(<AboutUs />);
  const ctaElement = screen.getByTestId('cta-content');
  expect(ctaElement).toBeInTheDocument();
});

test('renders footer component', () => {
  render(<AboutUs />);
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
});
