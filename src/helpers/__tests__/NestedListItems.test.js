// src/helpers/NestedListItems.test.js

import { nesteditems } from '../NestedListItems';

test('nesteditems has the correct structure', () => {
  expect(nesteditems).toHaveLength(2);
  expect(nesteditems[0]).toHaveProperty('name', 'List dialog 1');
  expect(nesteditems[0].children).toHaveLength(1);
  expect(nesteditems[1]).toHaveProperty('name', 'List dialog 2');
  expect(nesteditems[1].children).toHaveLength(2);
  expect(nesteditems[1].children[1].children).toHaveLength(1);
});
