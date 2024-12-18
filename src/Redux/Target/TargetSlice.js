import { createSlice } from '@reduxjs/toolkit'
import ActStore from './Act/ActStore'


const initialState = {
  target: [] ,
  loading: 'idle',
  error:null ,
}

export const targetSlice = createSlice({
  name: 'target',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.target = [] 
    } 
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActStore.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActStore.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
    })
    builder.addCase(ActStore.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
   }
   
})
// Action creators are generated for each case reducer function
export { ActStore } 
export const { CleanUp  } = targetSlice.actions
export default targetSlice.reducer