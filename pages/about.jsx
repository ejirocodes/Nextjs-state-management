import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import styles from "../styles/Home.module.css";

export default function About() {
  const darkTheme = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: darkTheme ? "#222222" : "#ffffff",
    color: darkTheme ? "#ffffff" : "#222222",
  };
  return (
    <main style={themeStyle} className={styles.main}>
      About
    </main>
  );
}
