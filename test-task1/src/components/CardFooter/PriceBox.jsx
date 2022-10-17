import { PriceBoxWrapper, PriceComment, PriceWrapper, Price } from "./styled";

const PriceBox = (props) => {
  return (
    <PriceBoxWrapper priceNotes={props.priceNotes}>
      <PriceWrapper>
        <Price>{props.price}</Price>
        <img src="https://github.com/MaryGuk/test-task1/blob/master/test-task1/src/components/CardFooter/ruble.png?raw=true" />
      </PriceWrapper>
      {props.priceNotes && <PriceComment>{props.priceNotes}</PriceComment>}
    </PriceBoxWrapper>
  );
};

export default PriceBox;
