import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HAAProNavbar from './HAAProNavbar';

test('renders navbar with correct links', () => {
  const { getByText } = render(
    <Router>
      <HAAProNavbar />
    </Router>
  );

  const homeLink = getByText('Home');
  const aboutUsLink = getByText('About Us');
  const whatWeDoLink = getByText('What we do');
  const meetMentoLink = getByText('Meet Mento');
  const contactLink = getByText('Contact');

  expect(homeLink.getAttribute('href')).toBe('/');
  expect(aboutUsLink.getAttribute('href')).toBe('/about-us');
  expect(whatWeDoLink.getAttribute('href')).toBe('/user-page');
  expect(meetMentoLink.getAttribute('href')).toBe('/low-admin');
  expect(contactLink.getAttribute('href')).toBe('/high-admin-child');
});

test('menu opens and closes correctly on small screens', () => {
  const { getByLabelText, getByText } = render(
    <Router>
      <HAAProNavbar />
    </Router>
  );

  const menuButton = getByLabelText('account of current user');
  fireEvent.click(menuButton);

  const homeLink = getByText('Home');
  const aboutUsLink = getByText('About Us');
  const whatWeDoLink = getByText('What we do');
  const meetMentoLink = getByText('Meet Mento');
  const contactLink = getByText('Contact');

  expect(homeLink).toBeInTheDocument();
  expect(aboutUsLink).toBeInTheDocument();
  expect(whatWeDoLink).toBeInTheDocument();
  expect(meetMentoLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();

  fireEvent.click(contactLink); // Clicking a link should close the menu

  expect(contactLink).not.toBeInTheDocument();
});
