import styled from "styled-components";
import { device } from "../../devices";

export const DescriptionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const MainItemContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledText = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4b4b4b;
  margin-left: 20px;
`;

export const TickImage = styled.img`
  height: 12px;
  margin-top: 5px;
`;

export const TimingItem = styled.div`
  background: ${(props) => (props.selected ? "#6BA6FF" : "#d9e8ff")};
  border-radius: 11px;
  text-align: center;
  height: 28px;
  margin-left: 7px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  width: 63px;

  @media ${device.desktop} {
    width: 73px;
  }
`;

export const TimingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 9px 8px auto 30px;
`;
