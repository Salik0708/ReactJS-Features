import React from "react";

import Post from "./components/Post";
import NavBar from "./components/NavBar";
import ThemeProvider from "./providers/ThemeProvider";
import LanguageProvider from "./providers/LanguageProvider";

const ReactContextExampleTwo = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NavBar />
        <Post />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default ReactContextExampleTwo;
