import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders checkout page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Оформление заказа/i);
  expect(linkElement).toBeInTheDocument();
});
