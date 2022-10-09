import PieChartComponent from "./PieChart";
import { Typography, Box } from "@mui/material";

const PieChartCard = ({ data }) => {
  const COLORS = [
    ["#0088FE", data[0].name],
    ["#00C49F", data[1].name],
    ["#FFBB28", data[2].name],
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ width: "50%", height: "100%" }}>
        <PieChartComponent data={data} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "40%",
          height: "70%",
        }}
      >
        {COLORS.map((c) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                backgroundColor: c[0],
                width: "1rem",
                height: "1rem",
                marginRight: "0.4rem",
              }}
            ></Box>
            <Box>{c[1]}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default PieChartCard;
