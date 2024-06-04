import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Light from "../../assets/light.svg";
import Dark from "../../assets/dark.svg";
import { changeTheme } from "../../redux/slices/themeSlice";
import { useEffect } from "react";

const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUser = useSelector((state: RootState) => state.auth.value);
  const { isLightMode } = useSelector((state: RootState) => state.theme);

  const handleThemeChange = () => {
    isLightMode ? dispatch(changeTheme(false)) : dispatch(changeTheme(true));
  };

  useEffect(() => {
    isLightMode
      ? document.body.classList.remove("dark-mode-bg")
      : document.body.classList.add("dark-mode-bg");
  }, [isLightMode, dispatch]);

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
        {!isUser && (
          <button
            className={styles["header-btn"]}
            onClick={() => navigate("/register")}
          >
            create account
          </button>
        )}
        {!isUser && (
          <button
            className={styles["header-btn"]}
            onClick={() => navigate("/signin")}
          >
            signin
          </button>
        )}
        {!!isUser && (
          <button
            className={styles["header-btn"]}
            onClick={() => signOut(auth)}
          >
            sign out
          </button>
        )}
        <button className={styles["theme-switch"]} onClick={handleThemeChange}>
          <img src={isLightMode ? Light : Dark} alt="" />
        </button>
      </div>
    </header>
  );
};
export default Header;
