// src/helpers/itemActions/__tests__/addTopLevelItem.test.js

const { createNewItem } = require("../../createNewItem");
const { addTopLevelItem } = require("../addTopLevelItem");

test('adds a new top-level item to the list', () => {
  const newItem = createNewItem('Click to Edit...');
  const setItems = jest.fn();
  
  addTopLevelItem(setItems, createNewItem);

  const expectedItems = [newItem];

  expect(setItems).toHaveBeenCalledWith(expect.any(Function));
  const updateFunction = setItems.mock.calls[0][0];
  const updatedItems = updateFunction([]);
  
  expect(updatedItems).toEqual(expectedItems);
});
