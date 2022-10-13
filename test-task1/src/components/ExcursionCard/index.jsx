import CardDescription from "../CardDescription";
import CardFooter from "../CardFooter";
import CardImage from "../CardImage";
import ExcursionTime from "../ExcursionTime";
import { CardContent, CardWrapper, Title } from "./styled";

const ExcursionCard = () => {
  return (
    <CardWrapper>
      <CardImage imageSrc="https://github.com/MaryGuk/test-task1/blob/master/test-task1/public/resources/img1.png?raw=true" />
      <CardContent>
        <ExcursionTime hours={2} />
        <Title>
          АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop
          Off 2019
        </Title>
        <CardDescription />
        <CardFooter />
      </CardContent>
    </CardWrapper>
  );
};

export default ExcursionCard;
