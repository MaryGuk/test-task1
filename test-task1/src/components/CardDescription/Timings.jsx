import { useState } from "react";
import { TimingItem, TimingsWrapper } from "./styled";

const Timings = (props) => {
  const [selectedTiming, setSelectedTiming] = useState();

  const timings = props.timings.slice(0, 4);

  if (props.timings.length > 4) {
    timings[3] = "еще...";
  }

  return (
    <TimingsWrapper>
      {timings?.map((time, idx) => (
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
