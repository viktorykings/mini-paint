import Form from "../components/Form/Form";
import { singUp } from "../firebase/AuthService";

const RegisterPage = () => {
  const handleRegister = (email: string, password: string) => {
    singUp(email, password);
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
