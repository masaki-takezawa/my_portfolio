import React, { createContext, useState, useContext } from 'react';

// [click, useClick]をContextとしてexport
const UserClick = createContext();

export const useUserClick = () => {
  return useContext(UserClick);
};

export const ClickProvider = ({ children }) => {
  const [click, setClick] = useState(false);
  const value = { click, setClick };

  return <UserClick.Provider value={value}>{children}</UserClick.Provider>;
};
