// src/helpers/itemActions/addItem.js

/**
 * Adds a new item to the children array of the specified parent item in the hierarchical list.
 *
 * @param {Array} items - The current list of items.
 * @param {Function} setItems - The function to update the state of the items.
 * @param {Object} parent - The parent item to which the new item should be added.
 * @param {Object} newItem - The new item to be added.
 */
export const addItem = (items, setItems, parent, newItem) => {
  /**
   * Recursively searches for the parent item in the list and adds the new item to its children.
   *
   * @param {Array} list - The current list of items being processed.
   * @returns {Array} - The updated list of items.
   */
  const recursiveAdd = (list) => {
    return list.map((item) => {
      if (item === parent) {
        // Found the parent item, add the new item to its children
        return { ...item, children: [...item.children, newItem] };
      } else {
        // Recursively process the children of the current item
        return { ...item, children: recursiveAdd(item.children) };
      }
    });
  };

  // Update the state with the new list of items
  setItems((prevItems) => recursiveAdd(prevItems));
};
