export const editItem = (items, setItems, item, newName) => {
    const recursiveEdit = (list) => {
      return list.map((i) => {
        if (i === item) {
          return { ...i, name: newName };
        } else {
          return { ...i, children: recursiveEdit(i.children) };
        }
      });
    };
  
    setItems((prevItems) => recursiveEdit(prevItems));
  };
  