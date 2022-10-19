import styled from "styled-components";
import { Box } from "@mui/material";
import { styled as MUIStyled } from "@mui/system";

export const HeaderImage = styled.img`
  color: black;
  width: 100%;
  position: absolute;
  top: -15vw;
`;

export const AutocompletesWrapper = MUIStyled(Box)`
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 50px;
  align-items: center;
  box-sizing: border-box;
`;

export const MainContent = MUIStyled(Box)`
display: flex;
flex-direction: column;

`;
