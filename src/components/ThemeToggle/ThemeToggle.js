import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { ThemeDispatchContext } from "../ThemeContext/ThemeContext";

export const ThemeToggle = () => {
  const setTheme = useContext(ThemeDispatchContext);
  const [nightMode, setNightMode] = useState(false);

  const handleToggle = () => {
    if (!nightMode) {
      setNightMode(true);
      setTheme("dark");
    } else {
      setNightMode(false);
      setTheme("light");
    }
  };
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Light/Dark Mode"
        checked={nightMode}
        onChange={handleToggle}
      />
    </Form>
  );
};
