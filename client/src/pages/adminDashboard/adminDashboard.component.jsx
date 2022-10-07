import { Typography, Box } from "@mui/material";
import React from "react";
import { MainPage } from "../../globals/styles";
import { Icon } from "@iconify/react";
import * as S from "./adminDashboard.styles";
import palette from "../../theme/palette";

const AdminDashboard = () => {
  return (
    <MainPage>
      <S.DashboardContainer>
        <Typography
          sx={{ fontSize: "2em", letterSpacing: "2px", fontWeight: 600 }}
        >
          Workfloe admin console
        </Typography>
        <S.DashboardRow>
          <S.DashboardLeft>
            <S.StatsContainer>
              <S.StatCard>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Icon
                    icon="fluent:people-team-16-filled"
                    width="30px"
                    height="30px"
                    color={palette.primary}
                  />
                  <Icon
                    icon="entypo:circular-graph"
                    width="30px"
                    height="30px"
                  />
                </Box>
                <Typography sx={{ fontSize: "2em", fontWeight: 700 }}>
                  120
                </Typography>
                <Typography sx={{ fontWeight: 600, color: palette.primary }}>
                  employees
                </Typography>
              </S.StatCard>
              <S.StatCard>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Icon
                    icon="fluent:tasks-app-28-filled"
                    width="30px"
                    height="30px"
                    color={palette.primary}
                  />
                  <Icon
                    icon="entypo:circular-graph"
                    width="30px"
                    height="30px"
                  />
                </Box>
                <Typography sx={{ fontSize: "2em", fontWeight: 700 }}>
                  540
                </Typography>
                <Typography sx={{ fontWeight: 600, color: palette.primary }}>
                  tasks
                </Typography>
              </S.StatCard>
            </S.StatsContainer>
            <S.TableContainer>
                <Typography sx={{fontSize:'1.2em',fontWeight:700}} >Quick Access</Typography>
            </S.TableContainer>
          </S.DashboardLeft>
          <S.DashboardRight>wejfhi</S.DashboardRight>
        </S.DashboardRow>
      </S.DashboardContainer>
    </MainPage>
  );
};

export default AdminDashboard;
