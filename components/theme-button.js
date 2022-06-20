import React from "react";
import { useContext } from "react";
import { useThemeUpdate, useTheme } from "../context/themeContext";

export default function ThemeButton() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyle = {
    backgroundColor: darkTheme ? "#222222" : "#ffffff",
    color: darkTheme ? "#ffffff" : "#222222",
  };

  return (
    <button style={themeStyle} onClick={toggleTheme}>
      Button component {darkTheme ? "dark" : "light"}
    </button>
  );
}
