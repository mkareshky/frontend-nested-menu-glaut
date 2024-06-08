// src/components/NestedList/__tests__/NestedList.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NestedList from '../NestedList';

test('renders NestedList component', () => {
  render(<NestedList />);
  expect(screen.getByText('Add Top-Level Item')).toBeInTheDocument();
});

test('adds a top-level item when button is clicked', () => {
  render(<NestedList />);
  const button = screen.getByTitle('click here');
  fireEvent.click(button);
  expect(screen.getAllByText('Click to Edit...').length).toBeGreaterThan(0);
});

test('displays tooltip for adding child items', () => {
  render(<NestedList />);
  expect(screen.getByText('Click on each item icon to add a child.')).toBeInTheDocument();
});
