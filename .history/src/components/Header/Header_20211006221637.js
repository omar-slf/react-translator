import { createMuiTheme, MuiThemeProvider, TextField } from "@material-ui/core";
import React from "react";
import "./Header.css";
import { ThemeProvider } from "@material-ui/styles";

export const Header = () => {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
        <MuiThemeProvidereProvider theme="darkTheme">
          <TextField id="standard-basic" label="standard" />
        </MuiThemeProvidereProvider>
      </div>
    </div>
  );
};
