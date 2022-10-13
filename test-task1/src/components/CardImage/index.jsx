import { CardImageBody, StyledImage } from "./styled";

const CardImage = (props) => {
  return (
    <CardImageBody>
      <StyledImage src={props.imageSrc} />
     
    </CardImageBody>
  );
};

export default CardImage;
