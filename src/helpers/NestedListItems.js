// src/helpers/NestedListItems.js

import { createNewItem } from "./createNewItem";

export const nesteditems = [
  {
    ...createNewItem('List dialog 1'),
    children: [
      createNewItem('content 1.1')
    ]
  },
  {
    ...createNewItem('List dialog 2'),
    children: [
      createNewItem('content 2.1'),
      {
        ...createNewItem('content 2.2'),
        children: [
          createNewItem('content 2.2.1')
        ]
      }
    ]
  }
];
