import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Gallery {
  images: ImageData[];
}

export interface ImageData {
  url: string;
  author: string;
  id: string;
}

const initialState: Gallery = {
  images: [],
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    saveImage: (state, action: PayloadAction<ImageData>) => {
      state.images = [...state.images, action.payload];
    },
  },
});

export const { saveImage } = gallerySlice.actions;

export default gallerySlice.reducer;
