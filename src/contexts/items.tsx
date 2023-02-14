import React, { useState, createContext, useContext } from "react";

interface IContext {
  arrItems: IItems[];
  AddItem: (item: IItems) => void;
  RemoveItem: (id: number) => void;
  UpdateItem: (updatedItem: IItems) => void;
}

interface IItems {
  id: number;
  name: string;
}

interface IChildren {
  children: React.ReactNode;
}

export const ItemsContext = createContext({} as IContext);

export const ItemsProvider: React.FC<IChildren> = ({ children }) => {
  const [arrItems, setArrItems] = useState<IItems[]>([]);

  const AddItem = (item: IItems) => {
    setArrItems([...arrItems, item]);
  };

  const RemoveItem = (id: number) => {
    let newArr = arrItems.filter((item) => item.id !== id);
    setArrItems(newArr);
  };

  const UpdateItem = (updatedItem: IItems) => {
    let newArr = arrItems.map((item) => {
      if (item.id === updatedItem.id) return updatedItem;
      else return item;
    });
    setArrItems(newArr);
  };

  return (
    <ItemsContext.Provider
      value={{ arrItems, AddItem, RemoveItem, UpdateItem }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  return useContext(ItemsContext);
};
