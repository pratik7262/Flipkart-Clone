import { Box, /*utton,*/ Typography } from "@mui/material";
import { useRef /*useState*/ } from "react";
// import {
//   MdOutlineKeyboardArrowLeft,
//   MdOutlineKeyboardArrowRight,
// } from "react-icons/md";

import {
  aHover,
  alignCenter,
  // btnStyle,
  justifyBetween,
} from "../../styles/style";

const Products = (props) => {
  // const [scrollValue, setScrollValue] = useState(0)
  const ref = useRef();
  // const scroll = (val) => {
  //   ref.current.scrollLeft += val;
  // };

  return (
    <Box
      sx={{
        ...justifyBetween,
        flexGrow: 1,
        height: "341px",
        overflowX: "scroll",
        scrollBehavior: "smooth",
      }}
      ref={ref}
    >
      {props.arr.map((item) => {
        return (
          <Box
            key={item.id}
            minWidth="231px"
            flexDirection="column"
            p="25px 15px"
            height="341px"
            sx={alignCenter}
          >
            <Box
              height="200px"
              width="150px"
              component="img"
              src={`/images/products/${item.src}`}
              alt={item.id}
              mb="10px"
            />
            <Typography
              variant="h4"
              component="a"
              fontWeight={500}
              href="#"
              sx={{
                color: "black",
                ...aHover,
              }}
            >
              {item.product}
            </Typography>
            <Typography
              variant="h4"
              component="a"
              href="#"
              sx={{
                color: "success.main",
                ...aHover,
              }}
            >
              {item.offer}
            </Typography>
            <Typography
              variant="h5"
              component="a"
              href="#"
              sx={{
                color: "grey",
                ...aHover,
              }}
            >
              {item.type}
            </Typography>
          </Box>
        );
      })}
      {/* <Box
        width="1300px"
        sx={{ ...justifyBetween, position: "absolute", bottom: "150px" }}
      >
        <Button
          variant="contained"
          sx={btnStyle}
          onClick={() => {
            scroll(-2000);
          }}
        >
          <MdOutlineKeyboardArrowLeft size={50} />
        </Button>
        <Box>
          <Button
            variant="contained"
            sx={btnStyle}
            onClick={() => {
              scroll(2000);
            }}
          >
            <MdOutlineKeyboardArrowRight size={50} />
          </Button>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Products;
