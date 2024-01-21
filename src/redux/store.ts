import { configureStore } from "@reduxjs/toolkit";
import reducers from './storeReducer';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: false
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch