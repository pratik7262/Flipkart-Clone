import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { center } from "../../styles/style";

const Header = ({category}) => {
  return (
    <Stack height="341px" minWidth="230px">
      <Box padding="25px 15px 0 15px">
        <Box height="38px" mb="40px">
          <Typography textAlign="center" variant="h2">
            Top Deals On {category}
          </Typography>
        </Box>
        <Box sx={{ ...center, height: "38px", mt: "72px" }}>
          <Button variant="contained">View All</Button>
        </Box>
      </Box>
      <Box bgcolor="secondary.main" height="100%" width="100%"></Box>
    </Stack>
  );
};

export default Header;
