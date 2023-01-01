import { Box } from "@mui/material";
import AppBar from "./components/appbar";
import Carousel from "./components/carousel";
import Gallary from "./components/gallary";
import ProductBar from "./components/productBar";

function App() {
  return (
    <>
      <AppBar />
      <Box mt='65px'>
        <ProductBar />
        <Box padding="8px">
          <Carousel />
          <Gallary />
        </Box>
      </Box>
    </>
  );
}

export default App;
