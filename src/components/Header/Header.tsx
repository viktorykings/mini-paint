import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const isUser = useSelector(
    (state: RootState) => state.auth.value,
  );

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
        {!isUser &&<button
          className={styles["header-btn"]}
          onClick={() => navigate("/register")}
        >
          create account
        </button>}
        {!isUser && <button
          className={styles["header-btn"]}
          onClick={() => navigate("/signin")}
        >
          signin
        </button>}
        {!!isUser && <button className={styles["header-btn"]} onClick={() => signOut(auth)}>
          sign out
        </button>}
      </div>
    </header>
  );
};
export default Header;
