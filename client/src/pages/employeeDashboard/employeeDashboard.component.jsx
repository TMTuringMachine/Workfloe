import { Typography, Box } from "@mui/material";
import React from "react";
import {
  PieChartStyles,
  RightSide,
  Card,
  BarChartStyles,
} from "./employeeDashBoard.styles";
import { Icon } from "@iconify/react";
import palette from "../../theme/palette";
import temp from "../../assets/temp.png";
import useAuth from "../../hooks/useAuth";

const getTasksCount = (tasks) => {
  const meetings = tasks.filter((a) => a.category == "meeting").length;
  const breaks = tasks.filter((a) => a.category == "break").length;
  const works = tasks.filter((a) => a.category == "work").length;

  return {
    meetings,
    breaks,
    works,
  };
};

const EmployeeDashboard = () => {
  const { user } = useAuth();
  const data = getTasksCount(user.tasks);
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "2em",
          letterSpacing: "2px",
          fontWeight: 600,
          margin: "1rem",
        }}
      >
        Good Morning, {user?.name}!
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "12rem",
              height: "12rem",
              borderRadius: "30px",
              boxShadow: "10px 10px 20px #cbcdce, -10px -10px 20px #ffffff;",
              display: "flex",
              flexDirection: "column",
              margin: "1rem",
              overflow: "hidden",
              position: "relative",
              padding: "0px",
            }}
          >
            <img
              style={{ width: "13rem", height: "13rem" }}
              src={temp}
              alt="profile pic"
            />
            <Box
              sx={{
                position: "absolute",
                top: "80%",
                left: "10%",
                color: "white",
              }}
            >
              #248
            </Box>
          </Box>
          <PieChartStyles></PieChartStyles>
          <PieChartStyles></PieChartStyles>
        </Box>
        {/* right */}
        <RightSide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Card>
              <Icon
                icon="clarity:employee-group-solid"
                width="50px"
                height="50px"
                color="black"
              />
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {data.meetings}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#888FA3",
                }}
              >
                Meeting Attended
              </Typography>
            </Card>

            <Card>
              <Icon
                icon="ic:baseline-work-history"
                width="50px"
                height="50px"
                color="black"
              />
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {data.works}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#888FA3",
                }}
              >
                Work Done
              </Typography>
            </Card>

            <Card>
              <Icon
                icon="ci:coffee-togo"
                width="50px"
                height="50px"
                color="black"
              />
              <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {data.breaks}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#888FA3",
                }}
              >
                Took Break
              </Typography>
            </Card>
          </Box>

          <BarChartStyles></BarChartStyles>
        </RightSide>
      </Box>
    </Box>
  );
};

export default EmployeeDashboard;
