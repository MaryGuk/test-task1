import CardDescriptionItem from "./CardDescriptionItem";
import Timings from "./Timings";

const CardDescription = (props) => {
  return [
    { text: "Билет на целый день" },
    { text: "Неограниченное число катаний" },
    { text: "6 остановок у главных достопримечательностей" },
    {
      text: "Ближайший рейс сегодня",
      additionalContent: <Timings timings={props.timings} />,
    },
  ].map((content, idx) => <CardDescriptionItem content={content} key={idx} />);
};

export default CardDescription;
