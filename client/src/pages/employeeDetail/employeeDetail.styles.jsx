import { styled, Box } from "@mui/material";
import palette from "../../theme/palette";

export const EmployeeDetailContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
}));

export const ContainerLeft = styled(Box)(() => ({
  height: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));

export const ContainerRight = styled(Box)(() => ({
  height: "100%",
  flex: 3,
}));

export const EmployeeInfoContainer = styled(Box)(() => ({
  width: "80%",
  height: "100%",
  backgroundColor: "#fff",
  borderRadius: "20px",
  boxShadow: palette.shadow1,
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
}));

export const EmployeeInfo = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  gap: "15px",
  '& .flx':{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:'10px'
  }
}));
