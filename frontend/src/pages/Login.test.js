import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom'; 
import Login from './Login';

describe('<Login />', () => {
  test('renders login form with username, password fields, and submit button', () => {
    const { getByLabelText, getByRole } = render(
        <MemoryRouter> {/* Wrap your component with MemoryRouter */}
          <Login />
        </MemoryRouter>
      );

    const usernameInput = getByLabelText(/user name/i);
    const passwordInput = getByLabelText(/password/i);
    const submitButton = getByRole('button', { name: /sign in/i });

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    
  });

  test('submits login form with valid username and password', async () => {
    const { getByLabelText, getByRole } = render(
        <MemoryRouter> {/* Wrap your component with MemoryRouter */}
          <Login />
        </MemoryRouter>
      );

    const usernameInput = getByLabelText(/user name/i);
    const passwordInput = getByLabelText(/password/i);
    const submitButton = getByRole('button', { name: /sign in/i });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    // Use waitFor when expecting an asynchronous action
    await waitFor(() => {
      // Assert the redirect or UI update logic here
      // Example: expect(window.location.pathname).toBe('/user-page');
    });
  });

  // Add more test cases as needed
});
