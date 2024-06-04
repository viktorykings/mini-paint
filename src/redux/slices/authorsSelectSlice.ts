import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterValue } from "../../interfaces/slices";

const initialState: FilterValue = {
  author: "",
  authors: [],
};

const filterAuthors = createSlice({
  name: "galleryFilter",
  initialState,
  reducers: {
    setFilterValue: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    setFilterAuthors: (state, action: PayloadAction<string[]>) => {
      state.authors = action.payload;
    },
  },
});

export const { setFilterValue, setFilterAuthors } = filterAuthors.actions;

export default filterAuthors.reducer;
