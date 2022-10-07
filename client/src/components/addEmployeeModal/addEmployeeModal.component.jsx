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
} from "@mui/material";
import React, { useState } from "react";
import { CustomButton } from "../../globals/styles";
import { ModalContainer } from "./addEmployeeModal.styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEmployeeModal = ({ state, toggleModal }) => {
  const [age, setAge] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Modal open={state} onClose={toggleModal}>
      <Slide direction="up" in={state}>
        <ModalContainer>
          <Typography sx={{ fontSize: "1.2em", fontWeight: 600 }}>
            ADD EMPLOYEE
          </Typography>

          <TextField label="Employee Name" variant="standard" fullWidth />
          <TextField label="Employee Email" variant="standard" fullWidth />
          <TextField label="Employee Password" variant="standard" fullWidth />
          <TextField label="Employee Phone" variant="standard" fullWidth />
          <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Department"
              onChange={handleChange}
            >
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Production">Production</MenuItem>
              <MenuItem value="Transport">Transport</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "row",gap:'20px',color:'gray' }}>
            <Typography>Date:</Typography>
            <input type="date" />
          </Box>
          {/* <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          /> */}
          <CustomButton>ADD</CustomButton>
        </ModalContainer>
      </Slide>
    </Modal>
  );
};

export default AddEmployeeModal;
