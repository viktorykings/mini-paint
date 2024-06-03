import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import app from "../firebase/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { saveUser, saveName } from "../redux/slices/authSlice";
import { useEffect } from "react";

function Root() {
  const navigate = useNavigate();
  app;
  const auth = getAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName)
        dispatch(saveUser(user.refreshToken));
        dispatch(saveName((user.displayName as string)));
        navigate("/gallery");
      } else {
        dispatch(saveUser(null));
        dispatch(saveName(('')));
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
