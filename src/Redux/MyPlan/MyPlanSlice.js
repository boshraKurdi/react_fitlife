import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex';


const initialState = {
  myPlans: [] ,
  loading: 'idle',
  error:null
}

export const myPlanSlice = createSlice({
  name: 'myPlan',
  initialState,
  reducers: {
    CleanUp: (state) => {
      state.loading = 'idle'
      state.error = null 
      state.myPlans = []
    } ,
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActIndex.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActIndex.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.myPlans = action.payload
    })
    builder.addCase(ActIndex.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
  },
})
// Action creators are generated for each case reducer function
export { ActIndex }
export const { CleanUp } = myPlanSlice.actions
export default myPlanSlice.reducer