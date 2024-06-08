// src/components/ListItem/ListItem.js

import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import SegmentIcon from '@mui/icons-material/Segment';
import SortIcon from '@mui/icons-material/Sort';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { createNewItem } from '../../helpers/createNewItem';

/**
 * ListItem component that renders an individual item and its children.
 * Allows adding child items and editing the item name.
 */
const ListItem = ({ item, addItem, editItem, maxDepth, currentDepth }) => {
  const [isEditing, setIsEditing] = useState(false); // State to handle editing mode
  const [itemName, setItemName] = useState(item.name); // State to handle item name

  // Handler to add a child item
  const handleAddChild = () => {
    if (currentDepth < maxDepth) {
      addItem(item, createNewItem());
    } else {
      alert('Maximum nesting level reached');
    }
  };

  // Handler to save the edited item name
  const handleEdit = () => {
    setIsEditing(false);
    editItem(item, itemName);
  };

  return (
    <div style={{ marginLeft: currentDepth * 20 }}>
      {/* Button to add a child item with tooltip */}
      <Tooltip title="Click to add Child">
        <IconButton
          onClick={handleAddChild}
          className="child-item"
          aria-label="nested-button"
          color="secondary"
          style={{
            color: "white",
            fontSize: "18px"
          }}
        >
          {(currentDepth === 1) ? <SegmentIcon /> : (currentDepth === 2) ? <SortIcon /> : <EqualizerIcon />}
        </IconButton>
      </Tooltip>

      {/* Input field for editing item name or displaying the name */}
      {isEditing ? (
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleEdit();
          }}
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{item.name}</span>
      )}

      {/* Recursively render child items */}
      {item.children.map((child, index) => (
        <ListItem
          key={index}
          item={child}
          addItem={addItem}
          editItem={editItem}
          maxDepth={maxDepth}
          currentDepth={currentDepth + 1}
        />
      ))}
    </div>
  );
};

export default ListItem;
