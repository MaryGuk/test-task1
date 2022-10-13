import { TimingItem, TimingsWrapper } from "./styled";

const Timings = () => {
  return (
    <TimingsWrapper>
      {["12:00", "12:00", "12:00", "12:00"].map((time, idx) => (
        <TimingItem key={idx}> {time} </TimingItem>
      ))}
    </TimingsWrapper>
  );
};

export default Timings;
