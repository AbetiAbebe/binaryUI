import { api } from '@binarycosmo/shared'
import { RootState } from '../../../../../../apps/core/src/app/store'
import { LoginUser, RegisteringUser } from '../state/authSlice'


export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ token: string; user: LoginUser }, any>({
      query: ( loginUser: LoginUser) => ({
        url: 'https://localhost:7080/api/Account/authenticate',
        method: 'POST',
        body: loginUser,
      }),
      invalidatesTags: [{ type: 'Login', id: '' }],
      extraOptions: {
      },
    }),
    register: build.mutation<{ token: string; user: RegisteringUser }, any>({
      query: ( registeringUser: RegisteringUser) => ({
        url: 'https://localhost:7080/api/Account/register',
        method: 'POST',
        body: registeringUser,
      }),
      invalidatesTags: [{ type: 'Register', id: '' }],
      extraOptions: {
      },
    }),
  }),
})

export const {
  useLoginMutation, useRegisterMutation
} = authApi;


export const { endpoints: { login }, } = authApi
