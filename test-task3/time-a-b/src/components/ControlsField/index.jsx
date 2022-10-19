import { useState } from "react";
import { AutocompletesWrapper } from "../MainPage/styled";
import Direction from "./Direction";
import DepartureTime from "./DepartureTime";
import { ABTimetable, BATimetable } from "./timetables";
import { TextField } from "@mui/material";
import CountTickets from "./CountTickets";

const getStartWithFromPreviousTrip = ({ value: { start, duration } }) =>
  start + duration;

const ControlsField = () => {
  const [currentDirection, setCurrentDirection] = useState();
  const [to, setTo] = useState();
  const [from, setFrom] = useState();
  const [countTickets, setCountTickets] = useState();

  const showCountField =
    currentDirection &&
    (!currentDirection?.value?.to || to) &&
    (!currentDirection?.value?.from || from);

  return (
    <AutocompletesWrapper>
      <Direction setCurrentDirection={setCurrentDirection} />
      {currentDirection?.value?.to && (
        <DepartureTime
          value={to}
          onChange={setTo}
          timetable={ABTimetable}
          label="Выберите время из А в В"
        />
      )}
      {currentDirection?.value?.from && (
        <DepartureTime
          value={from}
          onChange={setFrom}
          startWith={to && getStartWithFromPreviousTrip(to)}
          timetable={BATimetable}
          label="Выберите время из В в А"
        />
      )}
      {showCountField && (
        <CountTickets value={countTickets} onChange={setCountTickets} />
      )}
    </AutocompletesWrapper>
  );
};

export default ControlsField;
