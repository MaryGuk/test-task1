import { useState } from "react";
import { TimingItem, TimingsWrapper } from "./styled";

const Timings = (props) => {
  const [selectedTiming, setSelectedTiming] = useState();

  return (
    <TimingsWrapper>
      {props.timings?.map((time, idx) => (
        <TimingItem
          key={idx}
          selected={selectedTiming === idx}
          onClick={() => setSelectedTiming(idx)}
        >
          {time}
        </TimingItem>
      ))}
    </TimingsWrapper>
  );
};

export default Timings;
