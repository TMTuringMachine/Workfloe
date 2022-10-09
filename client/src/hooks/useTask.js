import React, { useCallback } from "react";
import axiosInstance from "../utils/axiosInstance";
import useAuth from "./useAuth";
import { useDispatch } from "react-redux";
import { enqueueSnackbar, useSnackbar } from "notistack";
import { addTaskSuccess } from "../redux/slices/auth";

const useTask = () => {
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const addTask = useCallback(async (data) => {
    const res = await axiosInstance.post(`/task/createTask/${user._id}`, data);
    console.log(res);
    if (!res.data.ok) {
      enqueueSnackbar(res.data.message, { variant: "error" });
      return;
    }
    const task = res.data.task;
    console.log(task, "hehehe");
    dispatch(addTaskSuccess({ task }));
    enqueueSnackbar(res.data.message, { variant: "success" });
  }, []);

  return {
    addTask,
  };
};

export default useTask;
