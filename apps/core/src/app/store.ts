import  {AuthReducer, RegistrationReducer} from '@binarycosmo/core/auth'
import { PaymentReducer } from '@binarycosmo/shared'
import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { api } from '../../../../libs/shared/src/lib/services/api'

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth     : AuthReducer,
      register : RegistrationReducer,
      payment  : PaymentReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  })

export const store = createStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
