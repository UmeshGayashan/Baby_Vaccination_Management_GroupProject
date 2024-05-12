import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  test('renders Navbar with navigation links and login button', () => {
    const { getAllByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Check if the logo is rendered
    expect(getAllByText('BabyVaxPro')).toBeInTheDocument();

    // Check if navigation links are rendered
    expect(getAllByText('Home')).toBeInTheDocument();
    expect(getAllByText('About Us')).toBeInTheDocument();
    expect(getAllByText('What we do')).toBeInTheDocument();
    expect(getAllByText('Meet Mento')).toBeInTheDocument();
    expect(getAllByText('Contact')).toBeInTheDocument();

    // Check if login button is rendered
    expect(getAllByText('Login')).toBeInTheDocument();
  });

  test('opens responsive menu when menu icon is clicked', () => {
    const { getByLabelText, getAllByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Click the menu icon
    fireEvent.click(getByLabelText('account of current user'));

    // Check if the responsive menu is opened
    expect(getAllByText('Home')).toBeInTheDocument();
    expect(getAllByText('About Us')).toBeInTheDocument();
    expect(getAllByText('What we do')).toBeInTheDocument();
    expect(getAllByText('Meet Mento')).toBeInTheDocument();
    expect(getAllByText('Contact')).toBeInTheDocument();
  });
});
