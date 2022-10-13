import { CardFooterWrapper, StyledButton } from "./styled";
import PriceBox from "./PriceBox";

const CardFooter = () => {
  return (
    <CardFooterWrapper>
      <PriceBox />
      <StyledButton> Подробнее </StyledButton>
    </CardFooterWrapper>
  );
};

export default CardFooter;
