import React from 'react';
import { render } from '@testing-library/react';
import ANotificationList from './ANotificationList';

test('renders a list of notifications', () => {
  const { getAllByText } = render(<ANotificationList />);

  // Since we have 50 notifications, each with the text "Notification [index + 1]",
  // we expect to find 50 instances of this text in the rendered component.
  const notificationTexts = Array.from(Array(50).keys()).map(index => `Notification ${index + 1}`);
  const notificationElements = getAllByText((content, node) => {
    return notificationTexts.includes(content);
  });

  expect(notificationElements.length).toBe(50);
});

test('renders notifications with proper structure', () => {
  const { getAllByRole } = render(<ANotificationList />);

  // We expect to find 50 list items in the rendered component
  const listItems = getAllByRole('listitem');

  expect(listItems.length).toBe(50);

  // Check if each list item contains a button and text
  listItems.forEach(listItem => {
    const button = listItem.querySelector('button');
    const text = listItem.querySelector('span');

    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
