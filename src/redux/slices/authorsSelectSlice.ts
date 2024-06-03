import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Gallery {
  images: ImageData[];
}

export interface ImageData {
  url: string;
  author: string;
  id: string;
}

export interface AuthorsData {
  authors: string[];
}
export interface FilterValue {
  author: string;
  authors: string[];
}

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
