import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import app from "../firebase/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { saveUser, saveName, saveError } from "../redux/slices/authSlice";
import { useEffect } from "react";

function Root() {
  const navigate = useNavigate();
  app;
  const auth = getAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
        dispatch(saveName((user.displayName as string)));
        navigate("/gallery");
      } else {
        dispatch(saveUser(null));
        dispatch(saveName(('')));
        dispatch(saveError(('')));
        navigate("/signin");

      }
    });
  }, [auth, dispatch, navigate]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
