import React, { useState } from "react";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import { carouselCardData } from "../../data/mockData";
import { Box, Button } from "@mui/material";
import { btnStyle, justifyBetween } from "../../styles/style";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
// import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxStep = carouselCardData.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleBackClick = () => {
    setActiveStep((preValue) => {
      if (preValue === 0) {
        return 7;
      } else {
        return preValue - 1;
      }
    });
  };
  const handleForwardClick = () => {
    setActiveStep((preValue) => {
      if (preValue === maxStep - 1) {
        return 0;
      } else {
        return preValue + 1;
      }
    });
  };
  return (
    <>
      <Box pt="8px" pr='8px' position="absolute">
        <AutoPlaySwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {carouselCardData.map((step) => (
            <div key={step.id}>
              <Box
                component="img"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={`/images/carousel imgs/${step.src}`}
                alt={step.id}
              />
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Box
          width="100%"
          sx={{ ...justifyBetween, position: "absolute", bottom: "75px" }}
        >
          <Button variant="contained" sx={btnStyle} onClick={handleBackClick}>
            <MdOutlineKeyboardArrowLeft size={50} />
          </Button>
          <Box>
            <Button
              variant="contained"
              sx={btnStyle}
              onClick={handleForwardClick}
            >
              <MdOutlineKeyboardArrowRight size={50} />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
