import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../utils/axiosInstance";

import { getEmployeesSuccess } from "../redux/slices/employee";
import { useSnackbar } from "notistack";

const useEmployees = () => {
  const dispatch = useDispatch();
  const { employees, pulled } = useSelector((state) => state.employee);
  const { enqueueSnackbar } = useSnackbar();

  const getAllEmployees = useCallback(async () => {
    if (pulled) return;
    const res = await axiosInstance.get("/user/employees");
    if (!res.data.ok) {
      enqueueSnackbar(res.data?.message || "Something went wrong", {
        variant: "error",
      });
      return;
    }
    dispatch(getEmployeesSuccess(res.data.employees));
    console.log(res, "employee response");
  }, []);

  return {
    getAllEmployees,
    employees,
  };
};

export default useEmployees;
