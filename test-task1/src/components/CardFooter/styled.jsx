import styled from "styled-components";
import { device } from "../../devices";

export const CardFooterWrapper = styled.div`
  padding: 0 7px;
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  justify-content: space-between;

  @media ${device.desktop} {
    justify-content: flex-start;
  }
`;

export const StyledButton = styled.button`
  padding: 11px 43px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #404040;
  background-color: #fed74b;
  border: 0.5px solid #cba500;
  border-radius: 20px;

  @media ${device.desktop} {
    margin-left: 13px;
  }
`;
export const PriceBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.priceNotes ? "space-between" : "center"};
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Price = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 20px;
  color: #000000;
`;

export const PriceComment = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  color: #000000;
`;
