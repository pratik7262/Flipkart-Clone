import { Box, Paper, Typography } from "@mui/material";
import { justifyBetween, center } from "../../styles/style";
import React from "react";
import { productBarData } from "../../data/mockData";

const ProductBar = () => {
  return (
    <Paper width="100%" elevation={2} sx={center}>
      <Box sx={{ ...justifyBetween, width: "1280px" }}>
        {productBarData.map((item) => {
          return (
            <Box
            key={item.id}
              sx={{ ...center, flexDirection: "column", padding: "12px 8px " }}
            >
              <img
                width="64px"
                height="64px"
                src={`/images/categories/${item.src}`}
                alt="grocery"
              />
              <Typography variant="h5">{item.text}</Typography>
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};

export default ProductBar;
