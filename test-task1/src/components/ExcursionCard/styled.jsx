import styled from "styled-components";
import { device } from "../../devices";

export const CardWrapper = styled.div`
  border: 0.3px solid #828282;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-width: 1106px;

  @media ${device.desktop} {
    flex-direction: row;
    max-height: 370px;
  }
`;

export const CardContent = styled.div`
  padding: 16px 12px 19px;

  @media ${device.desktop} {
    padding: 16px 23px 26px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #404040;
  margin-bottom: 17px;

  @media ${device.desktop} {
    margin-bottom: 12px;
  }
`;

export const MainExcursionInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    flex-direction: column-reverse;
  }
`;
