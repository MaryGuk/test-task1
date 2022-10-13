import { ExcursionTimeItems, StyledText } from "./styled";
import Clock from "./clock.svg";

const ExcursionTime = (props) => {
  return (
    <ExcursionTimeItems>
      <img src={Clock} />
      <StyledText> {`${props.hours} часа`} </StyledText>
    </ExcursionTimeItems>
  );
};

export default ExcursionTime;
