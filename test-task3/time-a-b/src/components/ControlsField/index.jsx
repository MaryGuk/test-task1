import { useState } from "react";
import { AutocompletesWrapper } from "../MainPage/styled";
import Direction from "./Direction";
import DepartureTime from "./DepartureTime";
import { TextField } from "@mui/material";

const ControlsField = () => {
  const [currentDirection, setCurrentDirection] = useState();

  return (
    <AutocompletesWrapper>
      <Direction setCurrentDirection={setCurrentDirection} />
      {currentDirection?.value?.to && (
        <DepartureTime label="Выберите время из А в В" />
      )}
      {currentDirection?.value?.from && (
        <DepartureTime label="Выберите время из В в А" />
      )}
    </AutocompletesWrapper>
  );
};

export default ControlsField;
