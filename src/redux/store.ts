import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import strokeReducer from "./slices/strokeSlice";
import authorsSelectReducer from "./slices/authorsSelectSlice";
import themeReducer from "./slices/themeSlice";

import { firebaseApi } from "../services/paints";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stroke: strokeReducer,
    authorsSelect: authorsSelectReducer,
    theme: themeReducer,
    [firebaseApi.reducerPath]: firebaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firebaseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
