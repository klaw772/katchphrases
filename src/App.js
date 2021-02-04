import React, { useContext } from "react";
import { SoundboardContainer } from "./components/SoundboardContainer/SoundboardContainer";
import { ThemeContext } from "./components/ThemeContext/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";

import "./App.css";

export const AppTheme = {
  light: {
    textColor: "#000",
    backgroundColor: "#fff",
  },
  dark: {
    textColor: "#fff",
    backgroundColor: "#333",
  },
};

const App = () => {
  const [theme] = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];
  return (
    <div
      className="app"
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <div>
        <ThemeToggle />
      </div>
      <SoundboardContainer />
    </div>
  );
};

export default App;
