import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getAuth, signOut } from "firebase/auth";
const Header = () => {
  const auth = getAuth();
  const user = useSelector((state: RootState) => state.auth.value);
  console.log("user from state", user);
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
        <button
          className={styles["header-btn"]}
          onClick={() =>
            signOut(auth)
              .then(() => {
                console.log("user signed out");
              })
              .catch((error) => {
                console.log("error", error);
              })
          }
        >
          sign out
        </button>
      </div>
    </header>
  );
};
export default Header;
