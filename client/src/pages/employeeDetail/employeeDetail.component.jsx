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
  Pie,
  PieChart,
  Cell,
} from "recharts";

const EmployeeDetail = () => {
  const { id } = useParams();
  const { getEmployeeDetails, currentEmployee } = useEmployees();
  const [employeeStatus, setEmployeeStatus] = useState(false);

  const data = [
    { name: "Monday", meeting: 12, break: 23, work: 122 },
    { name: "Tuesday", meeting: 22, break: 3, work: 73 },
    { name: "Wednesday", meeting: 13, break: 15, work: 32 },
    { name: "Thrusday", meeting: 44, break: 35, work: 23 },
    { name: "Friday", meeting: 35, break: 45, work: 20 },
    { name: "Saturday", meeting: 62, break: 25, work: 29 },
    { name: "Sunday", meeting: 37, break: 17, work: 61 },
  ];

  const colors = ["#6F6AF8", "#9523db", "#23dbde"];

  const data01 = [
    {
      name: "Meeting",
      value: 400,
    },
    {
      name: "Break",
      value: 300,
    },
    {
      name: "Work",
      value: 300,
    },
  ];

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
                <BarChart width="100%" height="100%" data={data}>
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
                  <PieChart width="100%" height="100%">
                    <Pie
                      data={data01}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                    >
                      {data01.map((entry, idx) => (
                        <Cell fill={colors[idx]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </S.PieChartContainer>
              <S.PieChartContainer>
                <Typography sx={{ fontWeight: 700, letterSpacing: "1px" }}>
                  Yestarday's task distribution
                </Typography>
                <ResponsiveContainer width="100%" height="90%">
                  <PieChart width="100%" height="100%">
                    <Pie
                      data={data01}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                    >
                      {data01.map((entry, idx) => (
                        <Cell fill={colors[idx]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
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
