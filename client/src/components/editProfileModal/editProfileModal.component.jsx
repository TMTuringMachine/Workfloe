import {
  MenuItem,
  Modal,
  Select,
  Slide,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  Box,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import { CustomButton } from "../../globals/styles";
import { ModalContainer } from "./editProfile.styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useTask from "../../hooks/useTask";

const EditProfileModal = ({ state, toggleModal }) => {
  const [data, setData] = useState({
    description: "",
    category: "",
    startTime: "",
    duration: "",
  });
  const { addTask } = useTask();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(data);
    addTask(data);
    toggleModal();
    // registerClient(data, toggleModal);
  };

  return (
    <Modal open={state} onClose={toggleModal}>
      <Slide direction="up" in={state}>
        <ModalContainer>
          <Typography sx={{ fontSize: "1.2em", fontWeight: 600 }}>
            EDIT PROFILE
          </Typography>
          <Avatar sx={{ width: "120px", height: "120px" }} />
          <TextField
            name="duration"
            label="Name"
            variant="standard"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            name="duration"
            label="Password"
            variant="standard"
            fullWidth
            onChange={handleChange}
          />
          <FormControl fullWidth variant="standard">
            <InputLabel
              onChange={handleChange}
              name="category"
              id="demo-simple-select-label"
            >
              Department
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.category}
              name="category"
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value="work">WORK</MenuItem>
              <MenuItem value="break">BREAK</MenuItem>
              <MenuItem value="meeting">MEETING</MenuItem>
            </Select>
          </FormControl>
          <CustomButton onClick={handleSubmit}>SAVE</CustomButton>
        </ModalContainer>
      </Slide>
    </Modal>
  );
};

export default EditProfileModal;
