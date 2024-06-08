// src/helpers/createNewItem.js

/**
 * Helper function to create a new item.
 *
 * @param {string} [name='Click to Edit...'] - The name of the new item.
 * @returns {Object} - The newly created item.
 */
export const createNewItem = (name = 'Click to Edit...') => ({
    name,
    children: []
  });
  