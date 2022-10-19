import textField from "./overrides/MuiInputBase";
import autocomplete from "./overrides/MuiAutocomplete";
import { createTheme } from "@mui/material";

export default createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: autocomplete,
    },
    MuiInputBase: {
      styleOverrides: textField,
    },
  },
});
