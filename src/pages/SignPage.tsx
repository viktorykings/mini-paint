import { useDispatch } from "react-redux";
import Form from "../components/Form/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { saveError } from "../redux/slices/authSlice";
import { errorHandler } from "../utils/errorHandler";

const SignPage = () => {
  const dispatch = useDispatch();

  const signIn = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      const errorMessage = error.message;
      const msg = errorHandler(errorMessage);
      if (errorMessage) dispatch(saveError(msg as string));
    });
  };
  return (
    <>
      <Form
        formTitle={"Sign in"}
        isRegisterForm={false}
        btnText={"sign in"}
        handleClick={signIn}
      />
    </>
  );
};
export default SignPage;
