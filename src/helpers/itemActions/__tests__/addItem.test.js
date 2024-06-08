// src/helpers/itemActions/addItem.test.js

import { createNewItem } from '../../createNewItem';
import { addItem } from '../addItem';

test('adds a new child item to the parent item', () => {
  const items = [createNewItem('Parent Item')];
  const parent = items[0];
  const newItem = createNewItem('Child Item');
  const setItems = jest.fn();

  addItem(items, setItems, parent, newItem);

  const expectedItems = [
    {
      ...parent,
    },
  ];


  expect(setItems).toHaveBeenCalledWith(expect.any(Function));
  setItems.mock.calls[0][0](items);
  expect(items).toEqual(expectedItems);
});
