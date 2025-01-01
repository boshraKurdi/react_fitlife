import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActIndex = createAsyncThunk(
    'MyPlan/ActIndex',
    async (data , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth , myGoal } = getState() 
        const goalsId = myGoal.myGoals.map((el) => (el.targets[0].goal_plan.goal_id))
        try {
            const response = await axios.post(`target/plans` , {id: `${goalsId}`} ,  {
                headers: {
                  Authorization: 'Bearer ' + auth.token
              }
              });
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