import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../services/auth';


export interface RegisteringUser {
  id?: string | null,
  firstName : string,
  lastName : string,
  userName : string,
  password : string,
  confirmPassword : string,
  gender : string,
  email : string
}

export interface RegistrationState {
  registeringUser : RegisteringUser ,
  registrationStatus : boolean | string,
  registrationMessage : string | null,
  error?: string | null | Error
}

const initialState: RegistrationState = {
  registeringUser : {
    confirmPassword : '',
    email : '',
    firstName : '',
    gender  : '',
    lastName : '',
    password : '',
    userName :  '',
    id: null,
  },
  registrationStatus : false,
  registrationMessage: null,
  error: null
}

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.register.matchPending, (state, action) => {
        console.log('pending', action)
      })
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action: any) => {
        console.log('fulfilled', action)
        state.registrationStatus  = action.payload.data.Succeeded;
        state.registrationMessage = action.payload.data.Message;
        state.registeringUser.id  = action.payload.data.Data;
        state.error               = action.payload.data.error;
      })
      .addMatcher(authApi.endpoints.register.matchRejected, (state, action: any) => {
        console.log('rejected', action)
        console.log('rejected #2', action.payload.data)
        state.registrationStatus  = action.payload.data.Succeeded;
        state.registeringUser.id  = null;
        state.registrationMessage = action.payload.data.Message;
        state.error               = action.payload.data.Errors
      })
  },
})

// Action creators are generated for each case reducer function
// export const {  register } = authSlice.actions

export default registrationSlice.reducer

export const getStatus = (state: any) => state.registrationStatus;
export const getRegistrationError = (state: any) => state.error;

