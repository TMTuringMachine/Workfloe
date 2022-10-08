import React, { useEffect, useState } from "react";

import { MainPage } from "../../globals/styles";
import * as S from "./employeeDetail.styles";
import { useParams } from "react-router-dom";
import useEmployees from "../../hooks/useEmployees";
import { Avatar, Typography, Switch, colors } from "@mui/material";
import { Icon } from "@iconify/react";
import axiosInstance from "../../utils/axiosInstance";
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
import moment from "moment";
import PieChartCard from "../employeeDashboard/PieChartCard";

import { getPieData, getWeekData } from "../../utils/piedata";

const EmployeeDetail = () => {
  const { id } = useParams();

  const { getEmployeeDetails, currentEmployee } = useEmployees();
  const [employeeStatus, setEmployeeStatus] = useState(false);
  var yday = new Date(Date.now() - 864e5);
  const today = moment(new Date()).format("MMM Do YY");
  const yestarday = moment(yday).format("MMM Do YY");

  useEffect(() => {
    getEmployeeDetails(id);
  }, [id]);

  const handleSwitchChange = async (e) => {
    setEmployeeStatus(e.target.checked);
    const res = await axiosInstance.post(
      `user/changeStatus/${currentEmployee._id}`,
      {
        val: e.target.checked,
      }
    );
  };

  useEffect(() => {
    if (currentEmployee != null) {
      setEmployeeStatus(currentEmployee.isActive);
    }
  }, [currentEmployee]);

  return (
    <MainPage>
      {currentEmployee !== null ? (
        <S.EmployeeDetailContainer>
          <S.ContainerLeft>
            <S.EmployeeInfoContainer>
              <Avatar
                src={currentEmployee?.profilePic?.path}
                sx={{ width: "150px", height: "150px" }}
              />
              <Typography sx={{ fontSize: "1.5em", fontWeight: 700 }}>
                {currentEmployee?.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9em",
                  fontWeight: 700,
                  color: employeeStatus ? "#0d9508" : "#b00a0a",
                }}
              >
                {employeeStatus ? "ACTIVE" : "DISABLED"}
              </Typography>
              <S.EmployeeInfo>
                <Typography
                  sx={{ fontWeight: 600, color: "#666666" }}
                  className="flx"
                >
                  <Icon icon="ic:round-alternate-email" />
                  {currentEmployee?.email}
                </Typography>
                <Typography className="flx">
                  <Icon icon="bxs:building-house" />{" "}
                  {currentEmployee?.department} Department
                </Typography>
                <Typography className="flx">
                  <Icon icon="akar-icons:phone" /> {currentEmployee?.phone}
                </Typography>
                <Typography className="flx">
                  <Icon icon="ic:round-date-range" />{" "}
                  {currentEmployee?.joiningDate}
                </Typography>
                <Switch
                  checked={employeeStatus}
                  onChange={handleSwitchChange}
                />
              </S.EmployeeInfo>
            </S.EmployeeInfoContainer>
          </S.ContainerLeft>
          <S.ContainerRight>
            <S.BarChartContainer>
              <ResponsiveContainer>
                <BarChart
                  width="100%"
                  height="100%"
                  data={getWeekData(currentEmployee.tasks)}
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
            </S.BarChartContainer>
            <S.PieChartsContainer>
              <S.PieChartContainer>
                <Typography sx={{ fontWeight: 700, letterSpacing: "1px" }}>
                  Todays task distribution
                </Typography>
                <ResponsiveContainer width="100%" height="90%">
                  <PieChartCard
                    data={getPieData(currentEmployee.tasks, today)}
                  />
                </ResponsiveContainer>
              </S.PieChartContainer>
              <S.PieChartContainer>
                <Typography sx={{ fontWeight: 700, letterSpacing: "1px" }}>
                  Yestarday's task distribution
                </Typography>
                <ResponsiveContainer width="100%" height="90%">
                  <PieChartCard
                    data={getPieData(currentEmployee.tasks, yestarday)}
                  />
                </ResponsiveContainer>
              </S.PieChartContainer>
            </S.PieChartsContainer>
          </S.ContainerRight>
        </S.EmployeeDetailContainer>
      ) : (
        <Typography>loading...</Typography>
      )}
    </MainPage>
  );
};

export default EmployeeDetail;
