import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import strokeReducer from "./slices/strokeSlice";
import galleryReducer from "./slices/gallerySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stroke: strokeReducer,
    gallery: galleryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
