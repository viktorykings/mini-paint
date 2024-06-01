import { useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import styles from "./Gallery.module.css";
import { RootState } from "../../redux/store";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
const Gallery = () => {
  const currentGallery = useSelector((state: RootState) => state.gallery);

  return (
    <div className={styles.gallery}>
      <Filter name=""  />
      <div className={styles.container}>
        {currentGallery.images.map((el) => (
          <GalleryItem src={el.url} author={el.author} />
        ))}
      </div>
    </div>
  );
};
export default Gallery;
