import React, { useState } from "react";

import { ThemeContext } from "../context";

const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const changeThemeMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, changeThemeMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
