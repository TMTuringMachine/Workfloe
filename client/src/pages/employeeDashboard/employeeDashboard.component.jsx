import { Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  PieChartStyles,
  RightSide,
  Card,
  BarChartStyles,
} from './employeeDashBoard.styles';
import { Icon } from '@iconify/react';
import palette from '../../theme/palette';
import temp from '../../assets/temp.png';
import useAuth from '../../hooks/useAuth';
import moment from 'moment';
import PieChartComponent from './PieChart';
import PieChartCard from './PieChartCard';
const getTasksCount = (tasks) => {
  const meetings = tasks.filter((a) => a.category == 'meeting').length;
  const breaks = tasks.filter((a) => a.category == 'break').length;
  const works = tasks.filter((a) => a.category == 'work').length;

  return {
    meetings,
    breaks,
    works,
  };
};

const getTaskAsPerDay = (tasks, setCurrDayData, setPrevDayData) => {
  var yesterday = new Date(Date.now() - 864e5);
  const cDate = moment(new Date()).format('MMM Do YY');
  const yDate = moment(yesterday).format('MMM Do YY');

  let meetings = 0;
  let breaks = 0;
  let works = 0;
  const currDay = tasks.map((t) => {
    const tDate = moment(t.startTime).format('MMM Do YY');

    if (tDate === cDate) {
      meetings += t.category === 'meeting' ? parseInt(t.duration) : 0;
      breaks += t.category === 'break' ? parseInt(t.duration) : 0;
      works += t.category === 'work' ? parseInt(t.duration) : 0;
    }
  });

  setCurrDayData([
    { name: 'meetings', value: meetings },
    { name: 'break', value: breaks },
    { name: 'works', value: works },
  ]);
  meetings = 0;
  breaks = 0;
  works = 0;
  const prevDay = tasks.map((t) => {
    const tDate = moment(t.startTime).format('MMM Do YY');

    if (tDate === yDate) {
      meetings += t.category === 'meeting' ? parseInt(t.duration) : 0;
      breaks += t.category === 'break' ? parseInt(t.duration) : 0;
      works += t.category === 'work' ? parseInt(t.duration) : 0;
    }
  });

  setPrevDayData([
    { name: 'meetings', value: meetings },
    { name: 'break', value: breaks },
    { name: 'works', value: works },
  ]);
};

const EmployeeDashboard = () => {
  const { user } = useAuth();
  const [currDayData, setCurrDayData] = useState([{}]);
  const [prevDayData, setPrevDayData] = useState([{}]);
  const data = getTasksCount(user.tasks);
  console.log(user);
  useEffect(() => {
    getTaskAsPerDay(user.tasks, setCurrDayData, setPrevDayData);
  }, []);
  console.log(currDayData);

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
        Good Morning, {user?.name}!
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
              borderRadius: '30px',
              boxShadow: '10px 10px 20px #cbcdce, -10px -10px 20px #ffffff;',
              display: 'flex',
              flexDirection: 'column',
              margin: '1rem',
              overflow: 'hidden',
              position: 'relative',
              padding: '0px',
              marginTop: '-1rem',
            }}
          >
            <img
              style={{ width: '13rem', height: '13rem' }}
              src={user.profilePic.path}
              alt="profile pic"
            />
            <Box
              sx={{
                position: 'absolute',
                top: '80%',
                left: '10%',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
              }}
            >
              #{user._id.slice(-4)}
            </Box>
          </Box>

          <PieChartStyles>
            <Typography
              sx={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
              }}
            >
              Today
            </Typography>
            <PieChartCard data={currDayData} />
          </PieChartStyles>

          <PieChartStyles>
            <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
              Yesterday
            </Typography>

            <PieChartCard data={prevDayData}></PieChartCard>
          </PieChartStyles>
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
            <Card>
              <Icon
                icon="clarity:employee-group-solid"
                width="50px"
                height="50px"
                color="black"
              />
              <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                {data.meetings ? data.meetings : 0}
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#888FA3',
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
              <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                {data.works ? data.works : 0}
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#888FA3',
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
              <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                {data.breaks ? data.breaks : 0}
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#888FA3',
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
