import { CardFooterWrapper, StyledButton } from "./styled";
import PriceBox from "./PriceBox";

const CardFooter = (props) => {
  return (
    <CardFooterWrapper>
      <PriceBox price={props.price} priceNotes={props.priceNotes} />
      <StyledButton> Подробнее </StyledButton>
    </CardFooterWrapper>
  );
};

export default CardFooter;
