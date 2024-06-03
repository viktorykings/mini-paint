import Filter from "../../components/Filter/Filter";
import styles from "./Gallery.module.css";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import { useGetDataFromFirebaseQuery } from "../../services/paints";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setFilterAuthors } from "../../redux/slices/authorsSelectSlice";

const Gallery = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetDataFromFirebaseQuery();
  console.log(data?.map((el) => el.author));
  const authors = new Set(data?.map((el) => el.author));
  dispatch(setFilterAuthors(Array.from(authors)));
  const filterVal = useSelector(
    (state: RootState) => state.authorsSelect.author,
  );
  const filteredData = filterVal
    ? data?.filter((el) => el.author === filterVal)
    : data;

  if (isLoading) return <p>Loading....</p>;

  return (
    <div className={styles.gallery}>
      <Filter />
      <div className={styles.container}>
        {filteredData &&
          filteredData.map((el) => (
            <GalleryItem src={el.url} author={el.author} key={el.id} />
          ))}
      </div>
    </div>
  );
};
export default Gallery;
