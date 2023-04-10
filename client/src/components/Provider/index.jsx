import { createContext, useState } from "react";
import { LocalStorageItems, Modes } from "../../constants";

export const ProviderContext = createContext();

const Provider = (props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(LocalStorageItems.THEME)
      ? localStorage.getItem(LocalStorageItems.THEME)
      : Modes.SYSTEM
  );

  const [todoList, setTodoList] = useState("");

  const [isUpdating, setIsUpdating] = useState("");

  return (
    <ProviderContext.Provider
      value={{
        theme,
        setTheme,
        todoList,
        setTodoList,
        isUpdating,
        setIsUpdating,
      }}
    >
      {props.children}
    </ProviderContext.Provider>
  );
};

export default Provider;
