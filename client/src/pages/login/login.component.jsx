import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import EmployeeLottie from "../../assets/employee.json";
import * as S from "./login.styles";
import { CustomButton } from "../../globals/styles";
import { Icon } from "@iconify/react";
import palette from "../../theme/palette";

const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EmployeeLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <S.LoginPage>
      <div className="logo">
        <Typography sx={{ fontSize: "1.5em", fontWeight: 600 }}>
          workfloe
        </Typography>
      </div>
      <S.SectionsContainer>
        <S.LottieContainer>
          <Lottie options={defaultOptions} height="100%" width="90%" />
        </S.LottieContainer>
        <S.LoginFormContainer>
          {/* <Typography sx={{fontSize:'2em',fontWeight:600,textAlign:'center'}} >Login to your workfloe account!</Typography> */}
          <S.LoginCard>
            <Icon icon="game-icons:air-zigzag" className="logo" width="100px" height="100px" color={palette.primary} />
            <Typography sx={{ fontSize: "1.5em" }}>
              Login to your account!
            </Typography>
            <TextField variant="standard" label="Email" fullWidth />
            <TextField
              variant="standard"
              label="Password"
              fullWidth
              type="password"
            />
            <CustomButton>LOGIN</CustomButton>
          </S.LoginCard>
        </S.LoginFormContainer>
      </S.SectionsContainer>
    </S.LoginPage>
  );
};

export default Login;
