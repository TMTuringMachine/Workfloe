import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import palette from "../../theme/palette";
import AddEmployeeModal from "../addEmployeeModal/addEmployeeModal.component";

import * as S from "./header.styles";

const Header = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <S.HeaderContainer>
      <S.FlexRow>
        <Typography
          sx={{ fontSize: "1.2em", fontWeight: 700, color: palette.surface }}
        >
          workfloe
        </Typography>
        <S.CustomSearchBar type="text" placeholder="Search anything!" />
      </S.FlexRow>
      <S.FlexRow>
        <button onClick={toggleAddModal}>add temp</button>
        <Avatar src="https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/12/n-1639218372l48cp.jpg?fit=700%2C875&ssl=1" />
      </S.FlexRow>
      <AddEmployeeModal state={showAddModal} toggleModal={toggleAddModal} />
    </S.HeaderContainer>
  );
};

export default Header;
