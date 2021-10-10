import {
  createMuiTheme,
  MenuItem,
  MuiThemeProvider,
  TextField,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import { ThemeProvider } from "@material-ui/styles";
import categoris from "../data/Category";

export const Header = ({ category, setcategory, word, setword }) => {
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
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            label="standard"
            className="search"
            id="standard-basic"
            label="So'zni kiriting"
            value={word}
            onChange=
          />
          <TextField
            select
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            label="Tanlang"
          >
            {categoris.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};
