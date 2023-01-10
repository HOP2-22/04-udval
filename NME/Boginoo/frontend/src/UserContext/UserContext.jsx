import React from "react";

import { useState, createContext } from "react";

export const User = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <User.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </User.Provider>
  );
};
