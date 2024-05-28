import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>Mini Paint</div>
      <div className={styles.links}>
        <button className={styles["header-link"]}>
          <Link to={"/paint"}>Paint</Link>
        </button>
        <button className={styles["header-link"]}>
          <Link to={"/gallery"}>Gallery</Link>
        </button>
        <button className={styles["header-btn"]}>
          <Link to={"/register"}>create account</Link>
        </button>
        <button className={styles["header-btn"]}>
          <Link to={"signin"}>sign in</Link>
        </button>
      </div>
    </header>
  );
};
export default Header;
