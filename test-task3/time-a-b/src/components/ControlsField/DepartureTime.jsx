import { useMemo } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { StyledInputWrapper } from "./styled";

const DepartureTime = (props) => {
  const options = useMemo(() => {
    if (props.startWith) {
      return props.timetable.filter(
        ({ value }) => value.start >= props.startWith
      );
    }

    return props.timetable;
  }, [props.timetable, props.startWith]);

  return (
    <StyledInputWrapper>
      <Autocomplete
        disablePortal
        options={options}
        value={props.value}
        onChange={(_, newValue) => props.onChange(newValue)}
        sx={{ width: 300 }}
        // onChange={(_, newValue) => props.setCurrentDirection(newValue)}
        renderInput={(params) => <TextField {...params} label={props.label} />}
      />
    </StyledInputWrapper>
  );
};

export default DepartureTime;
