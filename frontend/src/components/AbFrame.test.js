import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import AbFrame from './AbFrame';

describe('<AbFrame />', () => {
  test('renders AbFrame component', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AbFrame />
      </MemoryRouter>
    );

    // Check if the main heading is rendered
    expect(getByText('Know About Us')).toBeInTheDocument();

    // Check if the description paragraphs are rendered
    expect(getByText(/We provide details about vaccines for children/i)).toBeInTheDocument();
    expect(getByText(/Driven by a commitment to innovation and child health advocacy/i)).toBeInTheDocument();

    // Check if the "Learn more" button is rendered
    expect(getByText('Learn more')).toBeInTheDocument();
  });

  test('button redirects to "/about-us" when clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AbFrame />
      </MemoryRouter>
    );

    // Click the "Learn more" button
    fireEvent.click(getByText('Learn more'));

    // Check if the button redirects to "/about-us"
    expect(window.location.href).toBe('http://localhost/about-us');
  });
});
