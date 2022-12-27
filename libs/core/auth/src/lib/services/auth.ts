import { api } from '@binarycosmo/shared'
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
        // backoff: () => {
        //   // We intentionally error once on login, and this breaks out of retrying. The next login attempt will succeed.
        //   retry.fail({ fake: 'error' })
        // },
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
        // backoff: () => {
        //   // We intentionally error once on login, and this breaks out of retrying. The next login attempt will succeed.
        //   retry.fail({ fake: 'error' })
        // },
      },
    }),
  }),
})

export const {
  useLoginMutation, useRegisterMutation
} = authApi;


export const { endpoints: { login }, } = authApi
