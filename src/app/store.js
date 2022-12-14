import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from '../features/counter/counterSlice';
import { apiSlice } from '../features/posts/postsSlice';

// Creating the store, combining reducers, configuring redux developer tools...
export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
