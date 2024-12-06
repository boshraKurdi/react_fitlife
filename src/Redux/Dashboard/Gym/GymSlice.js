import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex'
import ActStore from './Act/ActStore'
import ActDestroy from './Act/ActDestroy'
const initialState = {
  gyms: [] ,
  gym: {} ,
  loading: 'idle',
  loadingStore: 'idle' ,
  loadingShow: 'idle' ,
  error:null
}

export const gymSlice = createSlice({
  name: 'gym',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.gyms = [] 
        state.loading = 'idle'
        state.error = null
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
      state.gyms = action.payload
    })
    builder.addCase(ActIndex.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //store
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
      //delete
      builder.addCase(ActDestroy.pending , (state) => {
        state.loading = 'pending' 
        state.error = null
      })
      builder.addCase(ActDestroy.fulfilled , (state , action) => {
        state.loading = 'succeeded' 
        state.gyms = state.gyms.filter((el) => {
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
export { ActIndex , ActStore , ActDestroy } 
export const { CleanUp } = gymSlice.actions
export default gymSlice.reducer