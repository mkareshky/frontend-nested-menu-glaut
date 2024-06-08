// src/helpers/itemActions/addTopLevelItem.js

/**
 * Adds a new top-level item to the list.
 *
 * @param {Function} setItems - The function to update the state of the items.
 * @param {Function} createNewItem - The function to create a new item.
 */
export const addTopLevelItem = (setItems, createNewItem) => {
  setItems((prevItems) => [...prevItems, createNewItem()]);
};
