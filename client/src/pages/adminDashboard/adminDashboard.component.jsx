import { Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MainPage } from "../../globals/styles";
import { Icon } from "@iconify/react";
import * as S from "./adminDashboard.styles";
import palette from "../../theme/palette";
import { DataGrid } from "@mui/x-data-grid";
import useEmployees from "../../hooks/useEmployees";
import AddEmployeeModal from "../../components/addEmployeeModal/addEmployeeModal.component";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Employee Name", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "department", headerName: "Department", width: 150 },
  { field: "phone", headerName: "Contact", width: 150 },
  { field: "status", headerName: "Status", width: 100 },
];

const formatData = (data) => {
  const nd = data.map((d) => ({
    id: d._id,
    name: d.name,
    phone: d.phone,
    department: d.department,
    email: d.email,
    status: d.isActive,
  }));

  return nd;
};

const AdminDashboard = () => {
  const { getAllEmployees, employees } = useEmployees();
  const [showAddModal, setShowAddModal] = useState(false);
  const [filteredEmployees, setFileteredEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  useEffect(() => {
    setFileteredEmployees(employees);
  }, [employees]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterEmployees = (query) => {
    const filteredEmp = employees.filter((e) => {
      console.log(e, query, "uo");
      return e?.name?.toLowerCase().includes(query?.toLowerCase());
    });
    setFileteredEmployees([...filteredEmp]);
  };

  useEffect(() => {
    if (searchQuery == "") {
      setFileteredEmployees(employees);
    } else {
      // console.log(searchQuery);
      filterEmployees(searchQuery);
    }
  }, [searchQuery]);

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
              <Typography sx={{ fontSize: "1.2em", fontWeight: 700 }}>
                Quick Access
              </Typography>
              <S.InputsContainer>
                <S.SearchInput
                  placeholder="Search employee"
                  type="text"
                  onChange={handleSearchChange}
                  value={searchQuery}
                />
              </S.InputsContainer>
              <S.DataGridContainer>
                <DataGrid
                  rows={formatData(filteredEmployees)}
                  columns={columns}
                  pageSize={100}
                  rowsPerPageOptions={[100]}
                  sx={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "20px",
                    boxShadow: palette.shadow1,
                    padding: "15px",
                  }}
                  autoHeight
                />
              </S.DataGridContainer>
            </S.TableContainer>
          </S.DashboardLeft>
          <S.DashboardRight>
            <S.ActionBarContainer>
              <Typography sx={{ fontSize: "1.2em", fontWeight: 700 }}>
                Actions Bar
              </Typography>
              <S.ActionBarItem onClick={toggleAddModal}>
                <Icon
                  icon="wpf:add-user"
                  width="35px"
                  height="35px"
                  color={palette.primary}
                />
                <Box sx={{ width: "70%" }}>
                  <Typography sx={{ fontSize: "0.9em", fontWeight: 600 }}>
                    ADD EMPLOYEE
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.65em", color: "gray" }}
                    className="subtitle"
                  >
                    Add new employee to the organization
                  </Typography>
                </Box>
              </S.ActionBarItem>
              <S.ActionBarItem onClick={() => {}}>
                <Icon
                  icon="fluent:people-team-16-filled"
                  width="35px"
                  height="35px"
                  color={palette.primary}
                />
                <Box sx={{ width: "70%" }}>
                  <Typography sx={{ fontSize: "0.9em", fontWeight: 600 }}>
                    ALL EMPLOYEES
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.65em", color: "gray" }}
                    className="subtitle"
                  >
                    View all employee details in the organization
                  </Typography>
                </Box>
              </S.ActionBarItem>
            </S.ActionBarContainer>
          </S.DashboardRight>
        </S.DashboardRow>
      </S.DashboardContainer>
      <AddEmployeeModal state={showAddModal} toggleModal={toggleAddModal} />
    </MainPage>
  );
};

export default AdminDashboard;
