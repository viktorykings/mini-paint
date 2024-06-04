import { useDispatch, useSelector } from "react-redux";
import Palette from "../../components/Palette/Palette";
import styles from "./Paint.module.css";
import {
  beginStroke,
  setCoords,
  setShape,
  setStrokeWidth,
  updateStroke,
} from "../../redux/slices/strokeSlice";
import { useEffect, useRef } from "react";
import {
  configureBrush,
  drawCircle,
  drawLine,
  drawRect,
  drawStroke,
  getCoords,
} from "../../utils/canvasUtils";
import { endStroke } from "../../redux/actions/sharedActions";
import { RootState } from "../../redux/store";
import Rect from "../../assets/rectangle.svg";
import Circle from "../../assets/circle.svg";
import Line from "../../assets/line.svg";
import WavyLine from "../../assets/wavyLine.svg";
import { useSetDataToFirebaseMutation } from "../../services/paints";

const PaintPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext("2d") };
  };

  const userName = useSelector((state: RootState) => state.auth.name);
  const id = useSelector((state: RootState) => state.auth.value);
  const currentStroke = useSelector((state: RootState) => state.stroke);

  const isDrawing = !!currentStroke.points.length;
  const dispatch = useDispatch();

  useEffect(() => {
    const { context } = getCanvasWithContext();
    if (!context) {
      return;
    }
    requestAnimationFrame(() => {
      configureBrush(context, currentStroke.color, currentStroke.width);
      if (currentStroke.shape === "brush") {
        drawStroke(context, currentStroke.points);
      }
      if (currentStroke.shape === "rect") {
        drawRect(context, currentStroke.width, currentStroke.coords);
      }
      if (currentStroke.shape === "circle") {
        drawCircle(context, currentStroke.coords);
      }
      if (currentStroke.shape === "line") {
        drawLine(context, currentStroke.coords);
      }
    });
  }, [currentStroke]);

  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(beginStroke({ x: offsetX, y: offsetY }));
  };
  const endDrawing = () => {
    if (isDrawing) {
      const coords = getCoords(currentStroke.points);
      dispatch(setCoords(coords));
      dispatch(endStroke({ stroke: currentStroke }));
    }
  };
  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      dispatch(setCoords(null));
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    dispatch(updateStroke({ x: offsetX, y: offsetY }));
  };
  const brushWidth = useRef<HTMLInputElement>(null);
  const handleChangeWidth = () => {
    if (brushWidth !== null) {
      dispatch(
        setStrokeWidth(
          brushWidth.current ? parseInt(brushWidth.current.value) : 1,
        ),
      );
    }
  };

  const handleChangeTool = (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLButtonElement).closest("button");
    const isButton = (target as HTMLElement).tagName === "BUTTON";
    if (isButton && target) {
      dispatch(setShape(target.value));
    }
  };
  const cleanCanvas = () => {
    const { context } = getCanvasWithContext();
    if (!context) return;
    context.clearRect(0, 0, 600, 600);
  };

  const [setNewPaint] = useSetDataToFirebaseMutation({
    fixedCacheKey: "setNewPaint",
  });
  const saveCanvas = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { canvas } = getCanvasWithContext();
    if (!canvas) return;
    const img = canvas.toDataURL("image/png");
    setNewPaint({ userName, img, id });
  };

  return (
    <div className={styles.paint}>
      <canvas
        width={600}
        height={600}
        className={styles.canvas}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      ></canvas>
      <div className={styles.tools}>
        <div className={styles.shapes} onClick={handleChangeTool}>
          <button
            value="brush"
            className={currentStroke.shape === "brush" ? styles.toolActive : ""}
          >
            <img src={WavyLine} alt="brush" />
          </button>
          <button
            value="line"
            className={currentStroke.shape === "line" ? styles.toolActive : ""}
          >
            <img src={Line} alt="line" />
          </button>
          <button
            value="circle"
            className={
              currentStroke.shape === "circle" ? styles.toolActive : ""
            }
          >
            <img src={Circle} alt="circle" />
          </button>
          <button
            value="rect"
            className={currentStroke.shape === "rect" ? styles.toolActive : ""}
          >
            <img src={Rect} alt="rect" />
          </button>
        </div>
        <button className={styles.clean} onClick={cleanCanvas}>
          clean
        </button>
        <button className={styles.clean} onClick={saveCanvas}>
          save
        </button>
        <div className={styles["brush-size"]}>
          <p>Brush size: {currentStroke.width} px</p>
          <input
            type="range"
            min={1}
            max={10}
            value={currentStroke.width}
            onChange={handleChangeWidth}
            ref={brushWidth}
          />
        </div>
        <div className={styles.pallete}>
          <Palette />
        </div>
      </div>
    </div>
  );
};

export default PaintPage;
