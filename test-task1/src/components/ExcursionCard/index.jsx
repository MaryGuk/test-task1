import CardDescription from "../CardDescription";
import CardFooter from "../CardFooter";
import CardImage from "../CardImage";
import ExcursionTime from "../ExcursionTime";
import { CardContent, CardWrapper, Title, MainExcursionInfo } from "./styled";

const ExcursionCard = (props) => {
  return (
    <CardWrapper>
      <CardImage {...props} />
      <CardContent>
        <div>
          <MainExcursionInfo>
            <ExcursionTime hours={2} />
            <Title>{props.title}</Title>
          </MainExcursionInfo>
          <CardDescription timings={props.timings} />
        </div>
        <CardFooter price={props.price} priceNotes={props.priceNotes} />
      </CardContent>
    </CardWrapper>
  );
};

export default ExcursionCard;
