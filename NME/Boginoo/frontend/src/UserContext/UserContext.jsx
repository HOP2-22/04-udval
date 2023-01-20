import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const User = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      config.headers.set("token", token);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // useEffect(() => {
  //   const getUserData = async () => {
  //     // const token = localStorage.getItem("jwt-token");
  //     const email = localStorage.getItem("email");
  //     try {
  //       if (email && token) {
  //         const userData = await axios.post("http://localhost:9000/user", {
  //           email: email,
  //         });
  //         setUser(userData.data);
  //       }
  //     } catch (error) {
  //       throw error;
  //     }
  //   };
  //   getUserData();
  // }, [localStorage]);

  return (
    <User.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </User.Provider>
  );
};
