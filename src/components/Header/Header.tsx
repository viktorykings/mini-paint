import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { getAuth, signOut } from "firebase/auth";
const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <header>
      <div className={styles.logo}>Mini Paint</div>
      <div className={styles.links}>
        <button
          className={styles["header-link"]}
          onClick={() => navigate("/paint")}
        >
          Paint
        </button>
        <button
          className={styles["header-link"]}
          onClick={() => navigate("/gallery")}
        >
          Gallery
        </button>
        <button
          className={styles["header-btn"]}
          onClick={() => navigate("/register")}
        >
          create account
        </button>
        <button
          className={styles["header-btn"]}
          onClick={() => navigate("/signin")}
        >
          signin
        </button>
        <button
          className={styles["header-btn"]}
          onClick={() =>
            signOut(auth)
          }
        >
          sign out
        </button>
      </div>
    </header>
  );
};
export default Header;
