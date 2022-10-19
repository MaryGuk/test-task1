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
  flex-wrap: wrap;
  height: 100vh;
  padding: 50px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #b9deed, #efefef);
  min-width: 400px;
  align-content: center;
`;

// display: grid;
// grid-column-gap:30px;
// grid-row-gap:30px;

export const MainContent = MUIStyled(Box)`
display: flex;
flex-direction: column;

`;
