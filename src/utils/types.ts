export type StrokeRootState = {
  currentStroke: Stroke;
  strokes: Stroke[];
};

export type Stroke = {
  points: Point[];
  color: string;
  width: number;
  shape: string;
  coords: Coords;
};

export type Point = {
  x: number;
  y: number;
};

export type Coords = {
  start: Point;
  end: Point;
};
