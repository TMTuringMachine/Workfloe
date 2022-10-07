import { Box, Button, styled } from "@mui/material";
import palette from "../theme/palette";

export const CustomButton = styled(Button)(() => ({
  width: "fit-content",
  height: "fit-content",
  padding: "5px 20px",
  backgroundColor: palette.primary,
  color: palette.surface,
  fontWeight: 600,
  "&:hover": {
    backgroundColor: palette.primary,
    color: palette.surface,
  },
}));
