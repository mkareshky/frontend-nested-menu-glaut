// src/helpers/itemActions.js

export const addItem = (items, setItems, parent, newItem) => {
    const recursiveAdd = (list) => {
      return list.map((item) => {
        if (item === parent) {
          return { ...item, children: [...item.children, newItem] };
        } else {
          return { ...item, children: recursiveAdd(item.children) };
        }
      });
    };
  
    setItems((prevItems) => recursiveAdd(prevItems));
  };
  