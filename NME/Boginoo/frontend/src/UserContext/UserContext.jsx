import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const User = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(Cookies.get("token"));

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      if (token) {
        config.headers.set("token", token);
        return config;
      } else {
        return config;
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await axios.post(
          "https://uda-boginoo-back.onrender.com/user"
        );
        setUser(data);
      } catch (error) {
        throw error;
      }
    };
    getUserData();
  }, []);

  return (
    <User.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </User.Provider>
  );
};
