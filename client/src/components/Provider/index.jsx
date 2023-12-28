import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { LocalStorageItems, Modes } from "../../constants";

export const ProviderContext = createContext();

const Provider = (props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(LocalStorageItems.THEME)
      ? localStorage.getItem(LocalStorageItems.THEME)
      : Modes.SYSTEM
  );

  const [token, setToken] = useState(
    sessionStorage.getItem("access_token")
      ? sessionStorage.getItem("access_token")
      : null
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  const getUserInfo = async () => {
    try {
      const token = sessionStorage.getItem("access_token");

      const headers = {
        Authentication: `Bearer ${token}`,
        Authorization: `Bearer ${token}`,
        access_token: token,
        "Content-Type": "application/json",
      };

      const res = await axios.get(
        `https://todo-app-mern-5dc7.onrender.com/api/users/me/info/`,
        {
          headers: headers,
        }
      );

      setUser({
        name: res.data.name,
        email: res.data.email,
        avatar: res.data.avatar,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, []);

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
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {props.children}
    </ProviderContext.Provider>
  );
};

export default Provider;
