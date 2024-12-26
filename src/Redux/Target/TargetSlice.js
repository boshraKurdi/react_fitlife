import { createSlice } from '@reduxjs/toolkit'
import ActStore from './Act/ActStore'
import ActStoreE from './Act/ActStoreE'


const initialState = {
  target: [] ,
  date: '' ,
  count: -1 ,
  loading: 'idle',
  loadingE: 'idle',
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
    //store exersice
    builder.addCase(ActStoreE.pending , (state) => {
      state.loadingE = 'pending' 
      state.error = null
    })
    builder.addCase(ActStoreE.fulfilled , (state , action) => {
      state.loadingE = 'succeeded' 
    })
    builder.addCase(ActStoreE.rejected , (state , action) => {
      state.loadingE = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })

   }
   
})
// Action creators are generated for each case reducer function
export { ActStore , ActStoreE } 
export const { CleanUp  } = targetSlice.actions
export default targetSlice.reducer