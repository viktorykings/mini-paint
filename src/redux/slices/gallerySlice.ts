import { Point, Stroke } from "../../utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { endStroke } from "../actions/sharedActions";

interface Gallery{
    images: ImageData[],
}

interface ImageData{
    url: string,
    author: string
}


const initialState: Gallery = {
  images: [],
};

const gallerySlice = createSlice({
  name: "currentStroke",
  initialState,
  reducers: {
    saveImage: (state, action: PayloadAction<ImageData>) => {
      state.images = [...state.images, action.payload];
    },
  }
});

export const {
    saveImage,

} = gallerySlice.actions;

// export const currentStrokeSelector = (state: RootState) => state.currentStroke;

export default gallerySlice.reducer;
