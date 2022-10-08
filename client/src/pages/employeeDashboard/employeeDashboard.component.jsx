import { Typography, Box, Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  PieChartStyles,
  RightSide,
  Card,
  BarChartStyles,
} from "./employeeDashBoard.styles";
import { Icon } from "@iconify/react";
import palette from "../../theme/palette";
import useAuth from "../../hooks/useAuth";
import moment from "moment";
import PieChartCard from "./PieChartCard";
import { getPieData, getWeekData } from "../../utils/piedata";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { CustomButton, MainPage } from "../../globals/styles";
import EmployeeDetailsModal from "../../components/employeeDetailModal/employeeDetailModa.component";

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

const minToHours = (mins)=>{
  var hours = Math.trunc(mins/60);
  var minutes = mins % 60;
  return hours +"."+ minutes;
}

const getTaskDuration = (tasks)=>{
  var meeting=0
  var work=0
  var totalbreak=0;
  // console.log(tasks)
  for(var i=0;i<tasks.length;i++){
      if(tasks[i].category==='work'){
        work+=tasks[i].duration
      }else if(tasks[i].category==='break'){
        totalbreak+=tasks[i].duration
      }else if(tasks[i].category==='meeting'){
        meeting+=tasks[i].duration
      }
  }

  return {
    meeting:minToHours(meeting),work:minToHours(work),totalbreak:minToHours(totalbreak)
  }

}

// const getTaskAsPerDay = (tasks, setCurrDayData, setPrevDayData) => {
//   var yesterday = new Date(Date.now() - 864e5);
//   const cDate = moment(new Date()).format("MMM Do YY");
//   const yDate = moment(yesterday).format("MMM Do YY");

//   let meetings = 0;
//   let breaks = 0;
//   let works = 0;
//   const currDay = tasks.map((t) => {
//     const tDate = moment(t.startTime).format("MMM Do YY");

//     if (tDate === cDate) {
//       meetings += t.category === "meeting" ? parseInt(t.duration) : 0;
//       breaks += t.category === "break" ? parseInt(t.duration) : 0;
//       works += t.category === "work" ? parseInt(t.duration) : 0;
//     }
//   });

//   setCurrDayData([
//     { name: "meetings", value: meetings },
//     { name: "break", value: breaks },
//     { name: "works", value: works },
//   ]);
//   meetings = 0;
//   breaks = 0;
//   works = 0;
//   const prevDay = tasks.map((t) => {
//     const tDate = moment(t.startTime).format("MMM Do YY");

//     if (tDate === yDate) {
//       meetings += t.category === "meeting" ? parseInt(t.duration) : 0;
//       breaks += t.category === "break" ? parseInt(t.duration) : 0;
//       works += t.category === "work" ? parseInt(t.duration) : 0;
//     }
//   });

//   setPrevDayData([
//     { name: "meetings", value: meetings },
//     { name: "break", value: breaks },
//     { name: "works", value: works },
//   ]);
// };

const EmployeeDashboard = () => {
  const { user } = useAuth();
  const data = getTasksCount(user.tasks);
  const duration = getTaskDuration(user.tasks)
  var yesterday = new Date(Date.now() - 864e5);
  const cDate = moment(new Date()).format("MMM Do YY");
  const yDate = moment(yesterday).format("MMM Do YY");
  const [showDateModal, setShowDateModal] = useState(false);

  const toggleDateModal = () => {
    setShowDateModal(!showDateModal);
  };

  return (
    <MainPage>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            marginBottom: "20px",
            justifyContent: "space-between",
            paddingRight: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "2em",
              letterSpacing: "2px",
              fontWeight: 600,
            }}
          >
            Good Morning, {user?.name}!
          </Typography>
          <CustomButton onClick={toggleDateModal}>FILTER BY DATE</CustomButton>
          <EmployeeDetailsModal
            state={showDateModal}
            toggleModal={toggleDateModal}
            tasks={user.tasks}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flex: 1,
            gap: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "fit-content",
              gap: "1.5rem",
              width: "25%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "fit-content",
                padding: "20px",
                // backgroundColor: "#fff",
                boxShadow: "10px 10px 20px #cbcdce, -10px -10px 20px #ffffff;",
                borderRadius: "20px",
                display: "flex",
                gap: "20px",
              }}
            >
              <Avatar
                src={user?.profilePic?.path}
                sx={{ width: "80px", height: "80px" }}
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: "1.2em" }}>
                  {user?.name}
                </Typography>
                <Typography sx={{ fontSize: "0.8em", color: "#7e7e7e" }}>
                  #{user?._id}
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Icon icon="bxs:building-house" /> {user?.department}{" "}
                  Department
                </Typography>
              </Box>
            </Box>

            <PieChartStyles>
              <Typography
                sx={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                }}
              >
                Today
              </Typography>
              <PieChartCard data={getPieData(user.tasks, cDate)} />
            </PieChartStyles>

            <PieChartStyles>
              <Typography sx={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                Yesterday
              </Typography>

              <PieChartCard data={getPieData(user.tasks, yDate)}></PieChartCard>
            </PieChartStyles>
          </Box>
          {/* right */}
          <RightSide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                gap: "1.5rem",
                height: "25%",
              }}
            >
              <Card>
                <Icon
                  icon="clarity:employee-group-solid"
                  width="40px"
                  height="40px"
                  color="black"
                />
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  {duration.meeting ? duration.meeting:null} Hours
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
                  width="40px"
                  height="40px"
                  color="black"
                />
                 <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  {duration.work ? duration.work:null} Hours
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
                  width="40px"
                  height="40px"
                  color="black"
                />
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  {duration.totalbreak ? duration.totalbreak:null} Hours
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

            <BarChartStyles>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width="100%"
                  height="100%"
                  data={getWeekData(user.tasks)}
                >
                  <CartesianGrid />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="meeting" stackId="a" fill="#6F6AF8" />
                  <Bar dataKey="break" stackId="a" fill="#9523db" />
                  <Bar dataKey="work" stackId="a" fill="#23dbde" />
                </BarChart>
              </ResponsiveContainer>
            </BarChartStyles>
          </RightSide>
        </Box>
      </Box>
    </MainPage>
  );
};

export default EmployeeDashboard;
