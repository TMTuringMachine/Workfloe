import React, { useCallback } from "react";
import axiosInstance from "../utils/axiosInstance";
import useAuth from "./useAuth";
import { enqueueSnackbar, useSnackbar } from "notistack";

const useTask = () => {
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const addTask = useCallback(async (data) => {
    const res = await axiosInstance.post(`/task/createTask/${user._id}`, data);
    console.log(res);
    if (!res.data.ok) {
      enqueueSnackbar(res.data.message, { variant: "error" });
      return;
    }
    enqueueSnackbar(res.data.message, { variant: "success" });
  }, []);

  return {
    addTask,
  };
};

export default useTask;
