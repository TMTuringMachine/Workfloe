import { styled, Box } from "@mui/material";
import palette from "../../theme/palette";
export const PieChartStyles = styled(Box)(() => ({
  // width: "24rem",
  width: "100%",
  height: "14rem",
  // flex:1,
  padding: "15px",
  borderRadius: "30px",
  boxShadow: "10px 10px 20px #cbcdce, -10px -10px 20px #ffffff;",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // margin: "1rem",
}));
export const RightSide = styled(Box)(() => ({
  // width: "fit-content",
  // maxWidth:"68vw",
  flex: 1,
  height: "100%",
  // maxWidth:'70vw',
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  padding: "0px 10px",
  gap: "30px",
}));
export const Card = styled(Box)(() => ({
  // width: "18rem",
  flex: 1,
  // height: "10rem",
  height:"100%",
  padding: "15px",
  borderRadius: "30px",
  boxShadow: "10px 10px 20px #cbcdce, -10px -10px 20px #ffffff;",
  display: "flex",
  flexDirection: "column",
  // backgroundColor:"#fff",
  // margin: "1rem",
  // marginTop: "0rem",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "1rem",
  transition: "0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.04)",
  },
}));

export const BarChartStyles = styled(Box)(() => ({
  width: "100%",
  flex: 1,
  padding: "15px",
  borderRadius: "30px",
  boxShadow: "10px 10px 20px #cbcdce, -10px -10px 20px #ffffff;",
  display: "flex",
  flexDirection: "column",
}));
