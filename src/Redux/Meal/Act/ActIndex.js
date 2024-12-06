import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActIndex = createAsyncThunk(
    'Meal/ActIndex',
    async (data , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth } = getState();
        try {
            const response = await axios.post(`plan/${data.day}/${data.week}/meals`
              , {
                'breakfast' : data.breakfast ,
                'lunch': data.lunch ,
                'dinner' : data.dinner
              } , {
                headers: {
                Authorization: 'Bearer ' + auth.token
            }});
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