import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeDispatchContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeDispatchContext.Provider value={setTheme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </ThemeDispatchContext.Provider>
  );
};
