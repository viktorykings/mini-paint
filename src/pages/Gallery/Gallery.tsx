import Filter from "../../components/Filter/Filter";
import styles from "./Gallery.module.css";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import { useGetDataFromFirebaseQuery } from "../../services/paints";


const Gallery = () => {
const {data, isLoading} = useGetDataFromFirebaseQuery()

if(isLoading) return (<p>Loading....</p>)

  return (
    <div className={styles.gallery}>
      <Filter name=""  />
      <div className={styles.container}>
        {data && data.map((el) => (
          <GalleryItem src={el.url} author={el.author} key={el.id} />
        ))}
      </div>
    </div>
  );
};
export default Gallery;
