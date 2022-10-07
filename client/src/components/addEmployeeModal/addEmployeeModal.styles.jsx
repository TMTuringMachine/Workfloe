import { Box, styled } from "@mui/material";

export const ModalContainer = styled(Box)(() => ({
  position: "absolute",
  width: "40vw",
  height: "fit-content",
  left: "30vw",
  top: "12vh",
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  outline: 'none',
  gap:'20px'
}));
