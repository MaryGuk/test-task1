import Direction from "../ControlsField/Direction";
import { HeaderImage } from "./styled";
import { Box } from "@mui/system";
import { MainContent } from "./styled";
import ControlsField from "../ControlsField";

const MainPage = () => {
  return (
    <Box>
      {/* <HeaderImage src="https://www.turliner.ru/images/ships/suvorov_1.jpg" /> */}
      <MainContent>
        <ControlsField />
      </MainContent>
    </Box>
  );
};

export default MainPage;
