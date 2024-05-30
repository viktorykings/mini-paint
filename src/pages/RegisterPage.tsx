import Form from "../components/Form/Form";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { saveError } from "../redux/slices/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const singUp = (
    email: string,
    password: string,
    userName: string | undefined,
  ) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (user) {
          updateProfile(user, {
            displayName: userName,
          });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage) dispatch(saveError(errorMessage));
      });
  };
  return (
    <>
      <Form
        formTitle={"Create account"}
        isRegisterForm={true}
        btnText={"Sign up"}
        handleClick={singUp}
      />
    </>
  );
};
export default RegisterPage;
