import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  InputBase,
} from "@mui/material";
import { center, justifyBetween } from "../../styles/style";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCart } from "@mui/icons-material";
const Appbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          sx={{ backgroundColor: "primary.main",}}
        >
          <Toolbar>
            <Container sx={justifyBetween}>
              <Box
                sx={{
                  flex: 1,
                }}
                maxWidth="75px"
              >
                <img
                  alt="logo"
                  style={{ width: "75px" }}
                  src="/images/flipkart.png"
                />
                <Box maxWidth="75px">
                  <Typography
                    fontStyle="initial"
                    variant="h6"
                    fontSize={11}
                    component="a"
                  >
                    Explore
                    <Typography
                      ml="2px"
                      sx={{ color: "#ffe500" }}
                      component="span"
                    >
                      plus
                    </Typography>
                  </Typography>
                  <img
                    width="10px"
                    alt="plus"
                    height="10px"
                    src="./images/plus.png"
                  />
                </Box>
              </Box>
              <Box sx={{ display: "flex", maxWidth: "670px" }}>
                <InputBase
                  sx={{
                    width: "521px",
                    height: "36",
                    float: "left",
                    padding: "0 16px",
                    backgroundColor: "white",
                  }}
                  placeholder="Search for products,brands and more"
                />
                <Box
                  sx={{
                    width: "42px",
                    height: "36px",
                    ...center,
                    backgroundColor: "white",
                  }}
                >
                  <SearchIcon sx={{ color: "primary.main" }} />
                </Box>
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  My Account
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Become a seller
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  More
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <ShoppingCart />
                <Typography variant="h5" fontWeight="bold">
                  Cart
                </Typography>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Appbar;
