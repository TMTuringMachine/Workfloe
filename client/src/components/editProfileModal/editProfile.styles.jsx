import { Box, styled } from "@mui/material";

export const ModalContainer = styled(Box)(() => ({
  position: "absolute",
  width: "30vw",
  height: "fit-content",
  left: "35vw",
  top: "10vh",
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  outline: 'none',
  gap:'20px'
}));
