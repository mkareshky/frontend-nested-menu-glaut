// src/helpers/itemActions/editItem.js

/**
 * Edits the name of an item in the hierarchical list.
 *
 * @param {Array} items - The current list of items.
 * @param {Function} setItems - The function to update the state of the items.
 * @param {Object} item - The item to be edited.
 * @param {string} newName - The new name for the item.
 */
export const editItem = (items, setItems, item, newName) => {
  /**
   * Recursively searches for the item in the list and updates its name.
   *
   * @param {Array} list - The current list of items being processed.
   * @returns {Array} - The updated list of items.
   */
  const recursiveEdit = (list) => {
    return list.map((i) => {
      if (i === item) {
        return { ...i, name: newName };
      } else {
        return { ...i, children: recursiveEdit(i.children) };
      }
    });
  };

  // Update the state with the edited list of items
  setItems((prevItems) => recursiveEdit(prevItems));
};

