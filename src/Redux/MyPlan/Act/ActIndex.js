import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MY_PLAN } from "../../../Api/Api";
const ActIndex = createAsyncThunk(
    'MyPlan/ActIndex',
    async (data , thunkAPI) => {
        const { rejectWithValue , getState } = thunkAPI;
        const { auth , myGoal } = getState() 
        const goalsId = myGoal.myGoals.map((el) => (el.targets[0].goal_plan_level.goal_id))
        try {
            const response = await axios.post(`${MY_PLAN}` , {ids: `${goalsId}`} ,  {
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