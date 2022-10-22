import inputBase from "./overrides/MuiInputBase";
import autocomplete from "./overrides/MuiAutocomplete";
import button from "./overrides/MuiButton";
import textField from "./overrides/MuiTextField";
import { createTheme } from "@mui/material";

export default createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: autocomplete,
    },
    MuiInputBase: {
      styleOverrides: inputBase,
    },
    MuiButton: {
      styleOverrides: button,
    },
    MuiTextField: {
      styleOverrides: textField,
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
