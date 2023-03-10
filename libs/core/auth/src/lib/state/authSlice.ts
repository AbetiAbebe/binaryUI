import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../services/auth';

export interface User {
  id        : string;
  email     : string;
  jwToken   : string;
  userName  : string;
  name      : string;
  avatar?   : string;
  status?   : string;
}

export interface RegisteringUser {
  email     : string;
  firstName : string;
  lastName  : string;
  password  : string;
  confirmPassowrd?  : string;
  gender    : string;
  userName? : string;
}

export interface LoginUser {
  userName : string,
  passWord : string,
}

export interface AuthState {
  loginUser : LoginUser | null,
  token     : string | null,
  user      : User | null,
  error?    : string | null | Error,
  loginStatus : boolean
}

const initialState: AuthState = {
  loginUser : {
    userName : '',
    passWord : '',
  },
  user : {
    id : '',
    email: '',
    jwToken : '',
    userName : '',
    name: '',
    avatar: '',
    status: ''
  },
  loginStatus : false,
  token : '',
  error: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchPending, (state, action) => {
        console.log('pending', action)
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action: any) => {
        console.log('fulfilled', action)
        state.loginUser = action.payload.loginUser;
        state.user  = action.payload.data;
        state.token = action.payload.token;
        state.loginStatus = true;
        state.error = action.payload.message;
      })
      .addMatcher(authApi.endpoints.login.matchRejected, (state, action: any) => {
        state.loginUser   = null;
        state.user        = null;
        state.token       = null;
        state.loginStatus = false;
        state.error       = action.payload.Message
        console.log('rejected', action)
      })
  },
})

// Action creators are generated for each case reducer function
export const {  logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: any) => state.user;
export const getLoginError = (state: any) => state.error;

