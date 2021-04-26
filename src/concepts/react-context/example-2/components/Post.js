import React, { useContext } from "react";

import { ThemeContext, LanguageContext } from "../context";

const styles = {
  container: {
    padding: "14px",
    height: "82vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black",
  },
};

const Post = () => {
  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => {
        return (
          <LanguageContext.Consumer>
            {({ language }) => {
              return (
                <div
                  style={{
                    ...styles.container,
                    backgroundColor: darkMode ? "#000" : "#fff",
                    color: darkMode ? "#fff" : "#000",
                  }}
                >
                  <h1>In {language === "en" ? "English" : "Spanish"}</h1>
                  <p>
                    {language === "en"
                      ? "A bad workman always blames his tools."
                      : "Un mal trabajador siempre culpa a sus herramientas."}{" "}
                  </p>
                </div>
              );
            }}
          </LanguageContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

// const Post = () => {
//   const { darkMode } = useContext(ThemeContext);
//   const { language } = useContext(LanguageContext);

//   return (
//     <div
//       style={{
//         ...styles.container,
//         backgroundColor: darkMode ? "#000" : "#fff",
//         color: darkMode ? "#fff" : "#000",
//       }}
//     >
//       <h1>In {language === "en" ? "English" : "Spanish"}</h1>
//       <p>
//         {language === "en"
//           ? "A bad workman always blames his tools."
//           : "Un mal trabajador siempre culpa a sus herramientas."}{" "}
//       </p>
//     </div>
//   );
// };

export default Post;
