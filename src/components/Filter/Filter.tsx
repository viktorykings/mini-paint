import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./Filter.module.css";
import { ChangeEvent } from "react";
import { setFilterValue } from "../../redux/slices/authorsSelectSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const authors = useSelector(
    (state: RootState) => state.authorsSelect.authors,
  );

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterValue(e.target.value));
  };
  return (
    <select className={styles.select} onChange={handleFilter}>
      <option value=""></option>
      {authors && authors.map((el) => <option value={el}>{el}</option>)}
    </select>
  );
};

export default Filter;
