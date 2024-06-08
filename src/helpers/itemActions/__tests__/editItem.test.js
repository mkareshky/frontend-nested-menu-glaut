// src/helpers/itemActions/editItem.test.js

const { createNewItem } = require("../../createNewItem");
const { editItem } = require("../editItem");

test('edits the name of an item', () => {
  const item = createNewItem('Old Name');
  const items = [item];
  const setItems = jest.fn();
  const newName = 'New Name';

  editItem(items, setItems, item, newName);

  const expectedItems = [
    {
      ...item,
      name: newName,
    },
  ];

  // Retrieve the function that was passed to setItems
  const updateFunction = setItems.mock.calls[0][0];

  // Apply the update function to the original items array to get the updated items
  const updatedItems = updateFunction(items);


  // Verify that the updated items match the expected items
  expect(updatedItems).toEqual(expectedItems);
});
