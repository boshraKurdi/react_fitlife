import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex'
import ActGetPlanForGoal from './Act/ActGetPlanForGoal'
import ActExerciseIndex from './Act/ActExerciseIndex'
import ActStore from './Act/ActStore'

const initialState = {
  plans: [] ,
  exercises: [] ,
  plansForGoal: [] ,
  loading: 'idle',
  error:null ,
  loadingStore: 'idle',
  errorStore:null ,
}

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.plans = [] 
    } 
    ,
    PlanForGoalCleanUp: (state) => {
      state.plansForGoal = [] 
  } 
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActIndex.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActIndex.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.plans = action.payload
    })
    builder.addCase(ActIndex.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    // plans for goal
    builder.addCase(ActGetPlanForGoal.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActGetPlanForGoal.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.plansForGoal = action.payload
    })
    builder.addCase(ActGetPlanForGoal.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
     // exe
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
    //store
    builder.addCase(ActStore.pending , (state) => {
      state.loadingStore = 'pending' 
      state.errorStore = null
    })
    builder.addCase(ActStore.fulfilled , (state , action) => {
      state.loadingStore = 'succeeded'
      window.location.pathname = '/dashboard'
    })
    builder.addCase(ActStore.rejected , (state , action) => {
      state.loadingStore = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.errorStore = action.payload 
      }
    })
   }
   
})
// Action creators are generated for each case reducer function
export { ActIndex , ActGetPlanForGoal , ActExerciseIndex , ActStore } 
export const { CleanUp , PlanForGoalCleanUp } = planSlice.actions
export default planSlice.reducer