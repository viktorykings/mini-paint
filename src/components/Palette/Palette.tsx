import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { setStrokeColor } from "../../redux/slices/strokeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Palette = () => {
  const currentStrokeColor = useSelector(
    (state: RootState) => state.stroke.color,
  );

  const [color, setColor] = useState(currentStrokeColor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStrokeColor(color));
  }, [color, dispatch]);

  return <HexColorPicker color={color} onChange={setColor} />;
};

export default Palette;
