import { styled, Box } from "@mui/material";

export const DashboardContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const DashboardRow = styled(Box)(() => ({
  width: "100%",
  flex: 1,
  marginTop: "20px",
  display: "flex",
}));

export const DashboardLeft = styled(Box)(() => ({
  height: "100%",
  flex: 3,
}));

export const DashboardRight = styled(Box)(() => ({
  height: "100%",
  flex: 1,
}));

export const StatsContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  gap: "50px",
}));

export const TableContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop:'30px'
}));

export const StatCard = styled(Box)(() => ({
  width: "275px",
  height: "fit-content",
  padding: "15px",
  borderRadius: "30px",
  boxShadow: "24px 24px 48px #e7e9e9,-24px -24px 48px #ffffff",
  display: "flex",
  flexDirection: "column",
}));
