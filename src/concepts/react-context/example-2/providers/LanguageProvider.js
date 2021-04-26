import React, { useState } from "react";

import { LanguageContext } from "../context";

const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (e) => setLanguage(e.target.value);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
