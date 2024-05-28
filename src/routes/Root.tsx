import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import app from "../firebase/firebaseConfig";

function Root() {
  app;
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
