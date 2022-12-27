import  {AuthReducer} from '@binarycosmo/core/auth'
import { api } from '@binarycosmo/shared'
import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth : AuthReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  })

export const store = createStore()

// export const store = configureStore({
//   reducer: {
//     auth : AuthReducer
//   },
// })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
