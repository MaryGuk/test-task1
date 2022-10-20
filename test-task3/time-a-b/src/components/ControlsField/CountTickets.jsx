import { TextField, InputAdornment } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  StyledInputWrapper,
  EndAdornmentWrapper,
  ArrowWrapper,
} from "./styled";

const CountTickets = (props) => {
  const handleChange = ({ target: { value } }) => {
    const intValue = value && parseInt(value);

    if (!isNaN(intValue)) {
      props.onChange(String(intValue));
    }
  };

  const handleArrowClick = (offset) => {
    if (!props.value) return;
    const newValue = Math.max(0, Number(props.value) + offset);
    props.onChange(String(newValue));
  };

  return (
    <StyledInputWrapper>
      <TextField
        sx={{ width: "300px" }}
        label="Количество билетов"
        onChange={handleChange}
        value={props.value}
        InputProps={{
          endAdornment: props.value && (
            <InputAdornment position="end">
              <EndAdornmentWrapper>
                <ArrowWrapper onClick={() => handleArrowClick(1)}>
                  <ArrowDropUpIcon />
                </ArrowWrapper>
                <ArrowWrapper onClick={() => handleArrowClick(-1)}>
                  <ArrowDropDownIcon />
                </ArrowWrapper>
              </EndAdornmentWrapper>
            </InputAdornment>
          ),
        }}
      />
    </StyledInputWrapper>
  );
};

export default CountTickets;
