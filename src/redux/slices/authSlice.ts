import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserInterface {
  value: string | null;
}

const initialState: UserInterface = {
  value: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
