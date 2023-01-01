import { Box, Stack } from "@mui/material";
import React from "react";
import { gallaryData } from "../../data/mockData";
import Header from "./Header";
import Products from "./Products";

const Gallary = () => {
  return (
    <Stack  mt="300px" spacing={4}>
      {gallaryData.map((item) => {
        return (
          <Box key={item.id} display="flex" width="100%"  height="341px">
            <Header category={item.category}/>
            <Products arr={item.arr}/>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Gallary;
