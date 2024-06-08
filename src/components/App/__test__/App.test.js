// src/components/App/__test__/App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this for custom matchers like toBeInTheDocument
import App from '../App';

describe('App Component', () => {
  test('renders NestedList component', () => {
    render(<App />);
    
    // Check if the NestedList component is rendered
    const nestedListElement = screen.getByTestId('nested-list');
    expect(nestedListElement).toBeInTheDocument();
  });
});
