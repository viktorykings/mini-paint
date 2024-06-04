import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../interfaces/slices";

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
    saveName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    saveError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { saveUser, saveName, saveError } = authSlice.actions;

export default authSlice.reducer;
