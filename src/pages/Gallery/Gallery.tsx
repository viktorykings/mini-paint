import Filter from "../../components/Filter/Filter";
import styles from "./Gallery.module.css";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import { useGetDataFromFirebaseQuery } from "../../services/paints";


const Gallery = () => {
const {data, isLoading, isFetching} = useGetDataFromFirebaseQuery()
console.log(data)

if(isLoading) return (<p>Loading....</p>)
  console.log(isFetching)

  return (
    <div className={styles.gallery}>
      {isFetching}
      <Filter name=""  />
      <div className={styles.container}>
        {data && data.map((el) => (
          <GalleryItem src={el.url} author={el.author} />
        ))}
      </div>
    </div>
  );
};
export default Gallery;
