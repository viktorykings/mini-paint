import { Coords, Point } from "./types";

export const drawStroke = (
  context: CanvasRenderingContext2D,
  points: Point[],
) => {
  if (!points.length) {
    return;
  }

  context.beginPath();
  context.moveTo(points[0].x, points[0].y);

  points.forEach((point) => {
    context.lineTo(point.x, point.y);
    context.stroke();
  });

  context.closePath();
};

export const drawRect = (
  context: CanvasRenderingContext2D,
  width: number,
  coords: Coords | null,
) => {
  if (!coords) return;
  context.beginPath();
  context.moveTo(coords.start.x, coords.start.y);
  const h = coords.end.y - coords.start.y + width;
  const w = coords.end.x - coords.start.x + width;

  context.rect(coords.start.x, coords.start.y, w, h);
  context.closePath();
  context.stroke();
};

export const drawCircle = (
  context: CanvasRenderingContext2D,
  coords: Coords | null,
) => {
  if (!coords) return;
  const x =  Math.abs(coords.start.x - coords.end.x)
  const y =  Math.abs(coords.start.y - coords.end.y)
  const rad =
  x > y ? x : y
  context.beginPath();
  context.arc(coords.start.x, coords.start.y, rad, 0, 2 * Math.PI);
  context.stroke();
  context.closePath();
};

export const drawLine = (
  context: CanvasRenderingContext2D,
  coords: Coords | null,
) => {
  if (!coords) return;
  context.beginPath();
  context.moveTo(coords.start.x, coords.start.y);
  context.lineTo(coords.end.x, coords.end.y);
  context.closePath();
  context.stroke();
};

export const configureBrush = (
  context: CanvasRenderingContext2D,
  color: string,
  width: number,
) => {
  context.strokeStyle = color;
  context.lineWidth = width;
  context.lineCap = "round";
};

export const getCoords = (points: Point[]) => {
  const start = { x: points[0].x, y: points[0].y };
  const end = {
    x: points[points.length - 1].x,
    y: points[points.length - 1].y,
  };
  return { start, end };
};
