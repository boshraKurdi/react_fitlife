import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActExerciseIndex = createAsyncThunk(
    'Plan/ActExerciseIndex',
    async (id , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get(`plan/${id}/exercises`);
            return response.data   
        } catch (error) {
            console.log(error)
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);   
            }else{
                return rejectWithValue("An unexpected error")
            }
        }
    },
  )
  export default ActExerciseIndex