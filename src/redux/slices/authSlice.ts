import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserInterface {
  value: string | null;
  name: string | null
}

const initialState: UserInterface = {
  value: null,
  name: null
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    saveName: (state, action: PayloadAction<string | null>) => {
      state.name = action.payload;
    },
  },
});

export const { saveUser, saveName } = authSlice.actions;

export default authSlice.reducer;
