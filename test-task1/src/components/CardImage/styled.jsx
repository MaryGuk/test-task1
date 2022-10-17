import styled from "styled-components";
import { device } from "../../devices";

export const CardImageBody = styled.div`
  width: 100%;
  position: relative;
  height: 220px;

  @media ${device.desktop} {
    height: 100%;
    max-width: 473px;
  }
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 16px 16px 0px 0px;

  @media ${device.desktop} {
    border-radius: 16px 0px 0px 16px;
  }
`;

export const LabelNew = styled.div`
  position: absolute;
  background-color: ${(props) => props.labelColor || "#fed74b"};
  padding: 8px 17px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #3e3e3e;
  width: min-content;
  white-space: nowrap;
  top: 41px;

  @media ${device.desktop} {
    top: 46px;
  }
`;
