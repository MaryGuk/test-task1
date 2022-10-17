import Tick from "./tick.svg";
import {
  DescriptionItemWrapper,
  StyledText,
  MainItemContent,
  TickImage,
} from "./styled";

const CardDescriptionItem = (props) => {
  const { text, additionalContent } = props.content;

  return (
    <DescriptionItemWrapper>
      <MainItemContent>
        <TickImage src={Tick} />
        <StyledText> {text} </StyledText>
      </MainItemContent>
      {additionalContent}
    </DescriptionItemWrapper>
  );
};

export default CardDescriptionItem;
