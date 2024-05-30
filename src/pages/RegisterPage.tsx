import Form from "../components/Form/Form";
import { signIn, singUp } from "../firebase/AuthService";

const RegisterPage = () => {
  const handleRegister = ( email: string, password: string, userName?: string) => {

    singUp(email, password, userName!);
  };
  return (
    <>
      <Form
        formTitle={"Create account"}
        isRegisterForm={true}
        btnText={"Sign up"}
        handleClick={handleRegister}
      />
    </>
  );
};
export default RegisterPage;
