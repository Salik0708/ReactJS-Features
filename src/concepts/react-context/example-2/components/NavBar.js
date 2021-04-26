import React from "react";
import {
  Switch,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import { ThemeContext, LanguageContext } from "../context";

const NavBar = () => {
  return (
    <ThemeContext.Consumer>
      {({ darkMode, changeThemeMode }) => {
        return (
          <LanguageContext.Consumer>
            {({ language, changeLanguage }) => {
              return (
                <AppBar
                  position="static"
                  color={darkMode ? "default" : "primary"}
                >
                  <Toolbar
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h6">Navbar</Typography>
                    <div>
                      <FormControl>
                        <Select
                          value={language}
                          onChange={(e) => changeLanguage(e)}
                        >
                          <MenuItem value={"en"}>English</MenuItem>
                          <MenuItem value={"es"}>Spanish</MenuItem>
                        </Select>
                      </FormControl>
                      <Switch checked={darkMode} onChange={changeThemeMode} />
                    </div>
                  </Toolbar>
                </AppBar>
              );
            }}
          </LanguageContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default NavBar;
