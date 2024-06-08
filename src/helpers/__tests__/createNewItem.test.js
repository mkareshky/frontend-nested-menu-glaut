// src/helpers/createNewItem.test.js

const { createNewItem } = require("../createNewItem");

test('creates a new item with default name', () => {
    const item = createNewItem();
    expect(item).toHaveProperty('name', 'Click to Edit...');
    expect(item).toHaveProperty('children', []);
});

test('creates a new item with specified name', () => {
    const itemName = 'Custom Item';
    const item = createNewItem(itemName);

    expect(item).toHaveProperty('name', itemName);
    expect(item).toHaveProperty('children', []);
});
