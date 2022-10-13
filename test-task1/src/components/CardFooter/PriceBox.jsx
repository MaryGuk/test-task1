import Ruble from "./ruble.svg";
import { PriceBoxWrapper, PriceComment, PriceWrapper, Price } from "./styled";

const PriceBox = () => {
  return (
    <PriceBoxWrapper>
      <PriceWrapper>
        <Price>900</Price>
        <img src={Ruble} />
      </PriceWrapper>
      <PriceComment> 1200 р на причале </PriceComment>
    </PriceBoxWrapper>
  );
};

export default PriceBox;
