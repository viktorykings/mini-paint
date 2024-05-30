import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserInterface {
  value: string | null;
  name: string | undefined;
  error: string | null;
}

const initialState: UserInterface = {
  value: null,
  name: "",
  error: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    saveName: (state, action: PayloadAction<string | undefined>) => {
      state.name = action.payload;
    },
    saveError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { saveUser, saveName, saveError } = authSlice.actions;

export default authSlice.reducer;
