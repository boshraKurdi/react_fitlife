import { createSlice } from '@reduxjs/toolkit'
import ActExerciseIndex from './Act/ActExerciseIndex'
import ActDestroy from './Act/ActDestroy'
const initialState = {
  exercises: [] ,
  loading: 'idle',
  error:null ,
}

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.exercises = [] 
    } 
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActExerciseIndex.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActExerciseIndex.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.exercises = action.payload
    })
    builder.addCase(ActExerciseIndex.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //delete
    builder.addCase(ActDestroy.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActDestroy.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.exercises = state.exercises.filter((el) => {
        if(el.id !== action.payload)
          return true
        else
          return false
        
      })
    })
    builder.addCase(ActDestroy.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
   }
   
})
// Action creators are generated for each case reducer function
export { ActExerciseIndex , ActDestroy } 
export const { CleanUp } = exerciseSlice.actions
export default exerciseSlice.reducer