import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const MessageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  margin: 10px;
  padding: 20px;
  justify-content: flex-start;
  color: black;
  border-radius: 15px;
  background-color: #b2ceea;
  opacity: 0.8;
`;
