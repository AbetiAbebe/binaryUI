import { createSlice } from '@reduxjs/toolkit';
import {courseApi} from '../services/course'

export interface CourseDetail {
  id: string,
  name: string,
  description: string,
  price: string,
  duration: string,
  author: string
}

export interface Course {
    course : CourseDetail | null,
    courseMessage : string,
    courseError: Error | string | null
}

const initialState: Course = {
    course : {
        id: '',
        name: '',
        description: '',
        price: '',
        duration: '',
        author: ''
      },
    courseError: null,
   courseMessage: '' 
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(courseApi.endpoints.Addcourse.matchPending, (state, action) => {
        console.log('pending', action);
      })
      .addMatcher(
        courseApi.endpoints.Addcourse.matchFulfilled,
        (state, action: any) => {
          console.log('fulfilled', action);
          state.course = action.payload.id;
          state.courseName = action.payload.data;
          state.token = action.payload.token;
          state.loginStatus = true;
          state.error = action.payload.message;
        }
      );
  },
});

// Action creators are generated for each case reducer function
export const { logout } = courseSlice.actions;

export default courseSlice.reducer;

export const selectCurrentUser = (state: any) => state.user;
export const getLoginError = (state: any) => state.error;
