import textField from "./overrides/MuiInputBase";
import autocomplete from "./overrides/MuiAutocomplete";
import button from "./overrides/MuiButton";
import { createTheme } from "@mui/material";

export default createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: autocomplete,
    },
    MuiInputBase: {
      styleOverrides: textField,
    },
    MuiButton: {
      styleOverrides: button,
    },
  },
});
