// src/components/NestedList/NestedList.js

import './NestedList.css'; // Import the CSS file
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import { createNewItem } from '../../helpers/createNewItem';
import ListItem from '../ListItem/ListItem';
import { nesteditems } from '../../helpers/NestedListItems';
import { addItem } from '../../helpers/itemActions/addItem';
import { editItem } from '../../helpers/itemActions/editItem';
import { addTopLevelItem } from '../../helpers/itemActions/addTopLevelItem';

const NestedList = () => {
  const [items, setItems] = useState(nesteditems);
  const maxDepth = 3;

  return (
    <div className='nested-list'>
      <IconButton onClick={() => addTopLevelItem(setItems, createNewItem)} title="click here" style={{
        color: "white",
        fontSize: "18px"
      }}><TagIcon /> Add Top-Level Item</IconButton>
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
      <div className="tooltip">
        <i className="fas fa-info-circle"></i>
        <span className="tooltiptext">Click on each item icon to add a child.</span>
      </div>
    </div>
  );
};

export default NestedList;
