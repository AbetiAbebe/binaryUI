import { Course } from './../state/courseSlice';
import { api } from "../../../shared/src";

export const courseApi = api.injectEndpoints({
  endpoints: (build) => ({
    Addcourse: build.mutation<{ token: string; course: Course }, any>({
      query: ( course: Course) => ({
        url: 'https://localhost:7080/api/Course/addNew',
        method: 'POST',
        body: course,
      }),
      invalidatesTags: [{ type: 'Course', id: '' }],
      extraOptions: {
      },
    }),
  }),
})

export const {
  useAddcourseMutation
} = courseApi;


export const { endpoints: { Addcourse }, } = courseApi;
