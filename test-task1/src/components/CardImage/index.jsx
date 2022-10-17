import { CardImageBody, StyledImage, LabelNew } from "./styled";

const CardImage = (props) => {
  return (
    <CardImageBody>
      <StyledImage src={props.imageSrc} />
      {props.labelText && (
        <LabelNew labelColor={props.labelColor}>{props.labelText}</LabelNew>
      )}
    </CardImageBody>
  );
};

export default CardImage;
