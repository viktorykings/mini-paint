import Form from "../components/Form/Form";
import { signIn } from "../firebase/AuthService";

const SignPage = () => {
  const handleSignIn = (email: string, password: string) => {
    signIn(email, password);
  };
  return (
    <>
      <Form
        formTitle={"Sign in"}
        isRegisterForm={false}
        btnText={"sign in"}
        handleClick={handleSignIn}
      />
    </>
  );
};
export default SignPage;
