import { Avatar, Typography, Box } from "@mui/material";
import React, { useState } from "react";

import { MainPage } from "../../globals/styles";
import * as S from "./profile.styles";
import useAuth from "../../hooks/useAuth";
import { Icon } from "@iconify/react";
import EditProfileModal from "../../components/editProfileModal/editProfileModal.component";

const Profile = () => {
  const { user } = useAuth();
  const [showEditModal, setShowEditModal] = useState(true);

  const toggleEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <MainPage>
      <S.ProfileContainer>
        <S.ProfileCard>
          <Avatar sx={{ width: "150px", height: "150px" }} />
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "2em",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {user?.name}
              <Icon
                icon="akar-icons:edit"
                width="25px"
                height="25px"
                style={{ cursor: "pointer" }}
                onClick={toggleEditModal}
              />
              <EditProfileModal
                state={showEditModal}
                toggleModal={toggleEditModal}
              />
            </Typography>
            <Typography sx={{ fontWeight: 600, color: "#666666" }}>
              {user?.email}
            </Typography>
            <Typography>
              <Icon icon="bxs:building-house" /> {user?.department} Department
            </Typography>
            <Typography>
              <Icon icon="akar-icons:phone" /> {user?.phone}
            </Typography>
          </Box>
        </S.ProfileCard>
      </S.ProfileContainer>
    </MainPage>
  );
};

export default Profile;
