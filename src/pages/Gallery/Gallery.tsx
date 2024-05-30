import { useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import styles from "./Gallery.module.css";
import { RootState } from "../../redux/store";
const Gallery = () => {

  const user = useSelector((state: RootState) => state.auth.name);
  const currentGallery = useSelector((state: RootState) => state.gallery);

  return (<div className={styles.container}>
    <Filter name='' />
    <div className={styles.container}>
      
      {currentGallery.images.map(el =>  <div><img src={el} width={300} height={300} style={{background:'white'}} /> <p>{user}</p></div>)}
    </div>
  </div>)
};
export default Gallery;
