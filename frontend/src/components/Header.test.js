import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('<Header />', () => {
  test('renders header with button', () => {
    const { getAllByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check if "Get Start" button is rendered
    expect(getAllByText('Get Start')).toBeInTheDocument();
  });

  test('redirects to "/login" when "Get Start" button is clicked', () => {
    // Mock useNavigate hook
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    const { getAllByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Click the "Get Start" button
    fireEvent.click(getAllByText('Get Start'));

    // Check if useNavigate is called with "/login"
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
});
