import { useDispatch } from "react-redux";
import Form from "../components/Form/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { saveError } from "../redux/slices/authSlice";

const SignPage = () => {
  const dispatch = useDispatch();

  const signIn = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorMessage = error.message;
        errorMessage
          ? dispatch(saveError(errorMessage))
          : dispatch(saveError(null));
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
