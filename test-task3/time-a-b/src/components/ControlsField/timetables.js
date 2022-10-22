import { duration } from "@mui/material";

const addZeroPrefix = (number) => {
  const stringNumber = String(number);

  if (stringNumber.length === 1) {
    return `0${stringNumber}`;
  }

  return stringNumber;
};

export const getTimeFromDate = (date) =>
  `${addZeroPrefix(date.getHours())}:${addZeroPrefix(date.getMinutes())}`;

const startStringsToTimetable = (startString, duration) =>
  startString.map((startString) => {
    const start = new Date(startString);

    return {
      label: getTimeFromDate(start),
      value: {
        start,
        duration,
      },
    };
  });

export const ABTimetable = startStringsToTimetable(
  [
    "2021-08-21 18:00:00",
    "2021-08-21 18:30:00",
    "2021-08-21 18:45:00",
    "2021-08-21 19:00:00",
    "2021-08-21 19:15:00",
    "2021-08-21 21:00:00",
  ],
  50
);

export const BATimetable = startStringsToTimetable(
  [
    "2021-08-21 18:30:00",
    "2021-08-21 18:45:00",
    "2021-08-21 19:00:00",
    "2021-08-21 19:15:00",
    "2021-08-21 19:35:00",
    "2021-08-21 21:50:00",
    "2021-08-21 21:55:00",
  ],
  50
);
