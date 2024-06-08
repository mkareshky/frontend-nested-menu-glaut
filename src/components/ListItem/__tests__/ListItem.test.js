// src/components/ListItem/ListItem.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListItem from '../ListItem';
import { createNewItem } from '../../../helpers/createNewItem';

const mockAddItem = jest.fn();
const mockEditItem = jest.fn();
const item = createNewItem('Test Item');

test('renders ListItem component', () => {
  render(<ListItem item={item} addItem={mockAddItem} editItem={mockEditItem} maxDepth={3} currentDepth={1} />);
  expect(screen.getByText('Test Item')).toBeInTheDocument();
});

test('enters edit mode when item name is clicked', () => {
  render(<ListItem item={item} addItem={mockAddItem} editItem={mockEditItem} maxDepth={3} currentDepth={1} />);
  fireEvent.click(screen.getByText('Test Item'));
  expect(screen.getByDisplayValue('Test Item')).toBeInTheDocument();
});

test('calls addItem when child button is clicked', () => {
  render(<ListItem item={item} addItem={mockAddItem} editItem={mockEditItem} maxDepth={3} currentDepth={1} />);
  fireEvent.click(screen.getByLabelText('nested-button'));
  expect(mockAddItem).toHaveBeenCalled();
});

test('edits item name on Enter key press', () => {
  render(<ListItem item={item} addItem={mockAddItem} editItem={mockEditItem} maxDepth={3} currentDepth={1} />);
  fireEvent.click(screen.getByText('Test Item'));
  const input = screen.getByDisplayValue('Test Item');
  fireEvent.change(input, { target: { value: 'New Item Name' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  expect(mockEditItem).toHaveBeenCalledWith(item, 'New Item Name');
});
