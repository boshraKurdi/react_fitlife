import { createSlice } from '@reduxjs/toolkit'
import ActIndex from './Act/ActIndex'
import ActDestroy from './Act/ActDestroy'
import ActShow from './Act/ActShow'
import ActUpdate from './Act/ActUpdate'
import ActStore from './Act/ActStore'
const initialState = {
  services: [] ,
  service: {},
  loading: 'idle',
  loadingShow: 'idle',
  loadingStore: 'idle',
  error:null ,
}

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    CleanUp: (state) => {
        state.services = [] 
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
      state.services = action.payload
    })
    builder.addCase(ActIndex.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //show
    builder.addCase(ActShow.pending , (state) => {
      state.loadingShow = 'pending' 
      state.error = null
    })
    builder.addCase(ActShow.fulfilled , (state , action) => {
      state.loadingShow = 'succeeded' 
      state.service = action.payload
    })
    builder.addCase(ActShow.rejected , (state , action) => {
      state.loadingShow = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //update
    builder.addCase(ActUpdate.pending , (state) => {
      state.loadingStore = 'pending' 
      state.error = null
    })
    builder.addCase(ActUpdate.fulfilled , (state , action) => {
      state.loadingStore = 'succeeded' 
    })
    builder.addCase(ActUpdate.rejected , (state , action) => {
      state.loadingStore = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //store
     //update
     builder.addCase(ActStore.pending , (state) => {
      state.loadingStore = 'pending' 
      state.error = null
    })
    builder.addCase(ActStore.fulfilled , (state , action) => {
      state.loadingStore = 'succeeded' 
    })
    builder.addCase(ActStore.rejected , (state , action) => {
      state.loadingStore = 'failed' 
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
      state.services = state.services.filter((el) => {
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
export { ActIndex , ActDestroy , ActShow , ActUpdate , ActStore } 
export const { CleanUp } = serviceSlice.actions
export default serviceSlice.reducer