import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActIndex = createAsyncThunk(
    'Service/ActIndex',
    async (id , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get(`dashboard/service/index`);
            return response.data.data   
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);   
            }else{
                return rejectWithValue("An unexpected error")
            }
        }
    },
  )
  export default ActIndex