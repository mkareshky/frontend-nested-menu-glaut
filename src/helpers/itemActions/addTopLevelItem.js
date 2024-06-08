export const addTopLevelItem = (setItems, createNewItem) => {
    setItems((prevItems) => [...prevItems, createNewItem()]);
  };
  