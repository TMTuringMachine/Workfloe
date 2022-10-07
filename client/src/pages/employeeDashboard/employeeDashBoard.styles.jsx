import { styled, Box } from '@mui/material';
import palette from '../../theme/palette';
export const PieChartStyles = styled(Box)(() => ({
  width: '24rem',
  height: '15rem',
  padding: '15px',
  borderRadius: '30px',
  boxShadow: '10px 10px 20px #cbcdce, -10px -10px 20px #ffffff;',
  display: 'flex',
  flexDirection: 'column',
  margin: '1rem',
}));
export const RightSide = styled(Box)(() => ({
  width: 'fit-content',
  height: '100vh',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  marginLeft: '1rem',
}));
export const Card = styled(Box)(() => ({
  width: '18rem',
  height: '12rem',
  padding: '15px',
  borderRadius: '30px',
  boxShadow: '10px 10px 20px #cbcdce, -10px -10px 20px #ffffff;',
  display: 'flex',
  flexDirection: 'column',
  margin: '1rem',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '1rem',
  transition: '0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.04)',
  },
}));

export const BarChartStyles = styled(Box)(() => ({
  width: '100%',
  height: '98%',
  padding: '15px',
  borderRadius: '30px',
  boxShadow: '10px 10px 20px #cbcdce, -10px -10px 20px #ffffff;',
  display: 'flex',
  flexDirection: 'column',
  margin: '1rem',
}));
