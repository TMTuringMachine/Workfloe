import { Typography, Box } from '@mui/material';
import React from 'react';
import {
  PieChartStyles,
  RightSide,
  Card,
  BarChartStyles,
} from './employeeDashBoard.styles';
const EmployeeDashboard = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '2em',
          letterSpacing: '2px',
          fontWeight: 600,
          margin: '1rem',
        }}
      >
        Good Morning, Sasha!
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: '12rem',
              height: '12rem',
              padding: '15px',
              borderRadius: '30px',
              boxShadow: '10px 10px 20px #cbcdce, -10px -10px 20px #ffffff;',
              display: 'flex',
              flexDirection: 'column',
              margin: '1rem',
            }}
          >
            heheh
          </Box>
          <PieChartStyles></PieChartStyles>
          <PieChartStyles></PieChartStyles>
        </Box>
        {/* right */}
        <RightSide>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </Box>

          <BarChartStyles></BarChartStyles>
        </RightSide>
      </Box>
    </Box>
  );
};

export default EmployeeDashboard;
