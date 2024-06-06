import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchContact = createAsyncThunk(
  "contacts/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);