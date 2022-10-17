import { CardImageBody, StyledImage, LabelNew } from "./styled";

const CardImage = (props) => {
  return (
    <CardImageBody>
      <StyledImage src={props.imageSrc} />
      <LabelNew>НОВИНКА</LabelNew>
    </CardImageBody>
  );
};

export default CardImage;
