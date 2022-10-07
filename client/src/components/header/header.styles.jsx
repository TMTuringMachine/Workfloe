import { styled, Box } from "@mui/material";
import palette from "../../theme/palette";

export const HeaderContainer = styled(Box)(() => ({
  width: "100vw",
  height: "60px",
  backgroundColor: palette.primary,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "5px 30px",
  justifyContent: "space-between",
}));

export const FlexRow = styled(Box)(()=>({
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:'30px'
}))

export const CustomSearchBar = styled("input")(()=>({
    width: '50vw',
    outline:'none',
    padding:'8px 20px',
    borderRadius:'5px',
    border:'none'
}))
