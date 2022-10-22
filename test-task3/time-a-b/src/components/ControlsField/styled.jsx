import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledInputWrapper = styled(Box)`
  margin: 10px;
  ${(props) => (props.fullwidth ? "grid-column: 1 / -1" : "")}
`;

export const EndAdornmentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ArrowWrapper = styled(Box)`
  cursor: pointer;
  height: 24px;
`;
