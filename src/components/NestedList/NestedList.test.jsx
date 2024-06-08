import React, { act } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

test('adds a top-level item', async () => {
  render(<NestedList />);

  await act(async () => {
    fireEvent.click(screen.getByText('Add Top-Level Item'));
  });

  // Wait for the new item to appear
  expect(await screen.findByText('Click to Edit...')).toBeInTheDocument();
});

test('adds a nested child item', async () => {
  render(<NestedList />);

  await act(async () => {
    const addButton = screen.getAllByRole('button', { name: /nested-button/i })[0];
    fireEvent.click(addButton);
  });

  // Wait for the new child item to appear
  expect(await screen.findByText('Click to Edit...')).toBeInTheDocument();
});

test('edits an item name', async () => {
  render(<NestedList />);

  // Ensure the item is rendered before interacting
  const item = await screen.findByText('List dialog 1');

  await act(async () => {
    fireEvent.click(item);
  });

  // Ensure the input field is available for interaction
  const input = await screen.findByDisplayValue('List dialog 1');

  await act(async () => {
    fireEvent.change(input, { target: { value: 'Edited Item 1' } });
    fireEvent.blur(input);
  });

  // Wait for the edited item name to appear
  expect(await screen.findByText('Edited Item 1')).toBeInTheDocument();
});
