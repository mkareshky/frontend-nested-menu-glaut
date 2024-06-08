// src/components/NestedList/NestedList.js

import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import { createNewItem } from '../../helpers/createNewItem';
import ListItem from '../ListItem/ListItem';
import { nesteditems } from '../../helpers/NestedListItems';
import { addItem } from '../../helpers/itemActions/addItem';
import { editItem } from '../../helpers/itemActions/editItem';
import { addTopLevelItem } from '../../helpers/itemActions/addTopLevelItem';
import './NestedList.css'; // Import the CSS file

/**
 * NestedList component that renders a nested list of items with functionality
 * to add top-level items and edit existing items.
 */
const NestedList = () => {
  const [items, setItems] = useState(nesteditems); // Initialize state with nested items
  const maxDepth = 3; // Maximum depth for nested items

  return (
    <div className='nested-list'>
      {/* Button to add a top-level item */}
      <IconButton
        onClick={() => addTopLevelItem(setItems, createNewItem)}
        title="click here"
        style={{
          color: "white",
          fontSize: "18px"
        }}
      >
        <TagIcon /> Add Top-Level Item
      </IconButton>

      {/* Render the list of items */}
      {items.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          addItem={(parent, newItem) => addItem(items, setItems, parent, newItem)}
          editItem={(item, newName) => editItem(items, setItems, item, newName)}
          maxDepth={maxDepth}
          currentDepth={1}
        />
      ))}

      {/* Tooltip for user guidance */}
      <div className="tooltip">
        <i className="fas fa-info-circle"></i>
        <span className="tooltiptext">Click on each item icon to add a child.</span>
      </div>
    </div>
  );
};

export default NestedList;
