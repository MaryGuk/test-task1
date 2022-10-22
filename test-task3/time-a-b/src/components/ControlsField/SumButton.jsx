import { StyledInputWrapper } from "./styled";
import AnchorIcon from "@mui/icons-material/Anchor";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

const SumButton = ({ children, loading, ...props }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setRotation((prevState) => prevState + 1),
      10
    );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledInputWrapper fullwidth>
      <Button disabled={loading} {...props}>
        {loading ? (
          <Box display="flex">
            <AnchorIcon sx={{ transform: `rotate(${rotation}deg)` }} />
          </Box>
        ) : (
          children
        )}
      </Button>
    </StyledInputWrapper>
  );
};

export default SumButton;
