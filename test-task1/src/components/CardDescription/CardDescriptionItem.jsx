import Tick from "./tick.svg";
import { DescriptionItemWrapper, StyledText, MainItemContent } from "./styled";

const CardDescriptionItem = (props) => {
  const { text, additionalContent } = props.content;

  return (
    <DescriptionItemWrapper>
      <MainItemContent>
        <img src={Tick} />
        <StyledText> {text} </StyledText>
      </MainItemContent>
      {additionalContent}
    </DescriptionItemWrapper>
  );
};

export default CardDescriptionItem;
