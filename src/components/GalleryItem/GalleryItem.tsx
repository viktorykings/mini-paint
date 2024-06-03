import styles from "./GalleryItem.module.css";
interface GalleryItemProps {
  src: string;
  author: string;
}
const GalleryItem = (props: GalleryItemProps) => {
  const { src, author } = props;
  return (
    <div className={styles.card}>
      <img src={src} className={styles.img} />
      <p className={styles.author}>{author}</p>
    </div>
  );
};

export default GalleryItem;
