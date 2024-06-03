import Form from "../components/Form/Form";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { saveError, saveName } from "../redux/slices/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const singUp = (
    email: string,
    password: string,
    userName: string | undefined,
  ) => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        return user
      })
      .then((user) => {
        updateProfile(user, {
          displayName: userName,
        });
        return user;
      })
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) =>{
            const user = userCredential.user;
            dispatch(saveName(user.displayName as string))
          })
          .catch((error) => {
            return error
          });
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
