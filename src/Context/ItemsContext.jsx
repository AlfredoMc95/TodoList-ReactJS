import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <ItemsContext.Provider value={[todos, setTodos]}>
      {children}
    </ItemsContext.Provider>
  );
};
