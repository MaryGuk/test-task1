import { PriceBoxWrapper, PriceComment, PriceWrapper, Price } from "./styled";

const PriceBox = () => {
  return (
    <PriceBoxWrapper>
      <PriceWrapper>
        <Price>900</Price>
        <img src="https://github.com/MaryGuk/test-task1/blob/master/test-task1/src/components/CardFooter/ruble.png?raw=true" />
      </PriceWrapper>
      <PriceComment> 1200 р на причале </PriceComment>
    </PriceBoxWrapper>
  );
};

export default PriceBox;
