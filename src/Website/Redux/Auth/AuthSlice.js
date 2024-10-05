import { createSlice } from '@reduxjs/toolkit'
import ActAuthLogin from './Act/ActAuthLogin'
import ActAuthSignUp from './Act/ActAuthSignUp'
import ActAuthUpdate from './Act/ActAuthUpdate'
import ActAuthLogout from './Act/ActAuthLogout'

const initialState = {
  user: {} ,
  type: null ,
  token: null ,
  loading: 'idle',
  error:null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    CleanUp: (state) => {
      state.loading = 'idle'
      state.error = null
    } ,
    LogOut: (state) =>{
      state.user = {} 
      state.token = null
    } ,
    SetAuth: (state , action) =>{
      state.token = action.payload
    }
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActAuthSignUp.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActAuthSignUp.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.user = action.payload.user
      state.token = action.payload.authorisation.token 
    })
    builder.addCase(ActAuthSignUp.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    // login
    builder.addCase(ActAuthLogin.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActAuthLogin.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.user = action.payload.user
      state.token = action.payload.authorisation.token

    })
    builder.addCase(ActAuthLogin.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //update
    builder.addCase(ActAuthUpdate.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActAuthUpdate.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
    })
    builder.addCase(ActAuthUpdate.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //logout
    builder.addCase(ActAuthLogout.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActAuthLogout.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.user = {}
      state.token = null

    })
    builder.addCase(ActAuthLogout.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
  },
})
// Action creators are generated for each case reducer function
export { ActAuthSignUp , ActAuthLogin , ActAuthUpdate , ActAuthLogout }
export const { CleanUp , SetAuth } = authSlice.actions
export default authSlice.reducer