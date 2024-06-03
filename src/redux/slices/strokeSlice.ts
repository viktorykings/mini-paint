import { Coords, Point, Stroke } from "../../utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { endStroke } from "../actions/sharedActions";

const initialState: Stroke = {
  points: [],
  color: "#000",
  width: 2,
  shape: "brush",
  coords: { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } },
};

const strokeSlice = createSlice({
  name: "currentStroke",
  initialState,
  reducers: {
    beginStroke: (state, action: PayloadAction<Point>) => {
      state.points = [action.payload];
    },
    updateStroke: (state, action: PayloadAction<Point>) => {
      state.points.push(action.payload);
    },
    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setStrokeWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setShape: (state, action: PayloadAction<string>) => {
      state.shape = action.payload;
    },
    setCoords: (state, action: PayloadAction<Coords | null>) => {
      state.coords = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state) => {
      state.points = [];
    });
  },
});

export const {
  beginStroke,
  updateStroke,
  setStrokeColor,
  setStrokeWidth,
  setShape,
  setCoords,
} = strokeSlice.actions;

// export const currentStrokeSelector = (state: RootState) => state.currentStroke;

export default strokeSlice.reducer;
