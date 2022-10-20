import { TextField, Autocomplete } from "@mui/material";
import { StyledInputWrapper } from "./styled";

const Direction = (props) => {
  const directions = [
    {
      label: "из A в B",
      value: {
        to: true,
        cost: 700,
      },
    },
    {
      label: "из B в A",
      value: {
        from: true,
        cost: 700,
      },
    },
    {
      label: "из A в B и обратно в А",
      value: {
        to: true,
        from: true,
        cost: 1200,
      },
    },
  ];

  return (
    <StyledInputWrapper>
      <Autocomplete
        disablePortal
        options={directions}
        sx={{ width: 300 }}
        value={props.value || ""}
        onChange={(_, newValue) => props.setCurrentDirection(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Выбрать направление" />
        )}
      />
    </StyledInputWrapper>
  );
};

export default Direction;
