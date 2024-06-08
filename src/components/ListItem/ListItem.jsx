import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import SegmentIcon from '@mui/icons-material/Segment';
import SortIcon from '@mui/icons-material/Sort';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { createNewItem } from '../../helpers/createNewItem';

const ListItem = ({ item, addItem, editItem, maxDepth, currentDepth }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [itemName, setItemName] = useState(item.name);

    const handleAddChild = () => {
        if (currentDepth < maxDepth) {
            addItem(item, createNewItem());
        } else {
            alert('Maximum nesting level reached');
        }
    };

    const handleEdit = () => {
        setIsEditing(false);
        editItem(item, itemName);
    };

    return (
        <div style={{ marginLeft: currentDepth * 20 }}>
            <Tooltip title="Click to add Child" >
                <IconButton onClick={handleAddChild} className="child-item" aria-label="nested-button" color="secondary"
                    style={{
                        color: "white",
                        fontSize: "18px"
                    }}
                >
                    {(currentDepth === 1) ? <SegmentIcon /> : (currentDepth === 2) ? <SortIcon /> : <EqualizerIcon />}
                </IconButton >
            </Tooltip>
            {
                isEditing ? (
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
                )
            }
            {
                item.children.map((child, index) => (
                    <ListItem
                        key={index}
                        item={child}
                        addItem={addItem}
                        editItem={editItem}
                        maxDepth={maxDepth}
                        currentDepth={currentDepth + 1}
                    />
                ))
            }
        </div >
    );
};

export default ListItem;