import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiRoutes } from "../routes/routes";

export const createNewUser = createAsyncThunk(
  "user/createNewUser",
  async (userData) => {
    const response = await axios.post(
      apiRoutes.user.createUserRoute(),
      userData
    );
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    const response = await axios.post(
      apiRoutes.user.loginUserRoute(),
      userData
    );
    if (response.data) {
      console.log(response.data)
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  }
);

export const editUser = createAsyncThunk(
  "user/editUser",
  async (userData, { getState }) => {
    const state = getState();
    const token = state.token();
    const response = await axios.put(
      apiRoutes.user.createUserRoute(),
      userData,
      {
        headers: {
          Authorazation: `Basic ${token}`,
        },
      }
    );
    return response.data;
  }
);
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (useData) => {
    const response = await axios.delete(apiRoutes.user.createUserRoute());
    return response.data;
  }
);

export const getUserProperties = createAsyncThunk(
  "user/getUserProperties",
  async (user) => {
    const response = await axios.get(
      apiRoutes.user.getUserProperties(user.user._id),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return response.data;
  }
);

export const getUserBookings = createAsyncThunk(
  "user/getUserBookings",
  async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios.get(apiRoutes.user.getUserBookingsRoute(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  }
);

export const bookProperty = createAsyncThunk(
  "user/bookProperty",
  async (bookingData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios.post(
      apiRoutes.user.bookPropertyRoute(),
      bookingData,
      {
        headers: {
          "Content-type": "Application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return response.data;
  }
);
export const deleteBooking = createAsyncThunk(
  "user/deleteBooking",
  async (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios.delete(apiRoutes.user.deleteBookingRoute(), {
      data: {
        id: id,
      },
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  }
);
