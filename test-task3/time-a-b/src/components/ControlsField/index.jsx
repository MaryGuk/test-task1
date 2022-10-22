import { useState } from "react";
import { AutocompletesWrapper } from "../MainPage/styled";
import Direction from "./Direction";
import DepartureTime from "./DepartureTime";
import { ABTimetable, BATimetable, getTimeFromDate } from "./timetables";
import CountTickets from "./CountTickets";
import SumButton from "./SumButton";
import ResultMessages from "./ResultMessages/ResultMessages";

const getFinishTripTime = ({ value: { start, duration } }) =>
  start.getTime() + duration * 60 * 1000;

const ControlsField = () => {
  const [currentDirection, setCurrentDirection] = useState();
  const [to, setTo] = useState();
  const [from, setFrom] = useState();
  const [countTickets, setCountTickets] = useState("1");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const handleSumButton = () => {
    const startJourney = to || from;
    const finishJourney = from || to;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setResult({
        countTickets,
        currentDirection: currentDirection?.label,
        journeyTime: (to?.value.duration || 0) + (from?.value.duration || 0),
        journeyStart: getTimeFromDate(startJourney?.value.start),
        journeyFinish: getTimeFromDate(
          new Date(getFinishTripTime(finishJourney))
        ),
        cost: countTickets * (currentDirection?.value.cost || 0),
      });
    }, 2000);
  };

  const handleChangeDirection = (newDirection) => {
    setTo();
    setFrom();
    setResult();
    setCountTickets("1");
    setCurrentDirection(newDirection);
  };

  const handleChangeTo = (newTo) => {
    if (
      from &&
      newTo &&
      from.value.start.getTime() < getFinishTripTime(newTo)
    ) {
      setFrom();
    }

    setResult();

    setTo(newTo);
  };

  const handleChangeFrom = (newFrom) => {
    setResult();
    setFrom(newFrom);
  };

  const handleCountTicket = (newCount) => {
    setResult();
    setCountTickets(newCount);
  };

  const showCountFieldAndSumButton =
    currentDirection &&
    (!currentDirection?.value?.to || to) &&
    (!currentDirection?.value?.from || from);

  return (
    <AutocompletesWrapper>
      <Direction onChange={handleChangeDirection} value={currentDirection} />
      {currentDirection?.value?.to && (
        <DepartureTime
          value={to}
          onChange={handleChangeTo}
          timetable={ABTimetable}
          label="Выберите время из А в В"
        />
      )}
      {currentDirection?.value?.from && (
        <DepartureTime
          value={from}
          onChange={handleChangeFrom}
          startWith={to && getFinishTripTime(to)}
          timetable={BATimetable}
          label="Выберите время из В в А"
        />
      )}
      {showCountFieldAndSumButton && (
        <>
          <CountTickets value={countTickets} onChange={handleCountTicket} />
          <SumButton loading={loading} onClick={handleSumButton}>
            Посчитать
          </SumButton>
        </>
      )}
      {result && !loading && <ResultMessages result={result} />}
    </AutocompletesWrapper>
  );
};

export default ControlsField;
