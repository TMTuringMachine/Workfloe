import { styled, Box } from "@mui/material";
import palette from "../../theme/palette";

export const ProfileContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProfileCard = styled(Box)(({ theme }) => ({
  width: "40%",
  height: "fit-content",
  padding: "30px 30px",
  borderRadius: "30px",
  boxShadow: "24px 24px 48px #e7e9e9,-24px -24px 48px #ffffff",
  display: "flex",
  flexDirection: "row",
  gap: "30px",
  alignItems: "center",
  backgroundColor: "#fff",
  [theme.breakpoints.down("lg")]: {
    width: "60%",
  },
  [theme.breakpoints.down("md")]: {
    width: "80%",
    borderRadius: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    borderRadius: "10px",
  },
}));
