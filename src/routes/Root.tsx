import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import app from "../firebase/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../redux/slices/authSlice";
import { useEffect } from "react";
import { RootState } from "../redux/store";

function Root() {
  const navigate = useNavigate();
  app;
  const auth = getAuth();
  const user = useSelector((state: RootState) => state.auth.value);
  console.log("user from state", user);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
        navigate("/gallery");
      } else {
        dispatch(saveUser(null));
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
