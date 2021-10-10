import { createMuiTheme, MuiThemeProvider, TextField } from "@material-ui/core";
import React from "react";
import "./Header.css";
import { ThemeProvider } from "@material-ui/styles";

export const Header = () => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
        <ThemeProvider>
          <TextField id="standard-basic" label="standard" />
        </ThemeProvider>
      </div>
    </div>
  );
};
