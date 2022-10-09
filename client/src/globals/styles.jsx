import { Box, Button, styled } from '@mui/material';
import palette from '../theme/palette';

export const CustomButton = styled(Button)(() => ({
  width: 'fit-content',
  height: 'fit-content',
  padding: '5px 20px',
  backgroundColor: palette.primary,
  color: palette.surface,
  fontWeight: 600,
  '&:hover': {
    backgroundColor: palette.primary,
    color: palette.surface,
  },
}));

export const MainPage = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100%',
  backgroundColor: palette.backgrond1,
  padding: '30px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '15px',
  },
}));
