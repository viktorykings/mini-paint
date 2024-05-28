import { useState } from "react";
import styles from "./Form.module.css";
import { signIn } from "../../firebase/AuthService";

interface FormProps {
  formTitle: string;
  isRegisterForm: boolean;
  btnText: string;
}

const Form = (props: FormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const handleRegister = (e: React.MouseEvent<HTMLElement>) => {
  //     e.preventDefault()
  //     e.stopPropagation()

  //     singUp(email, password)
  //     setEmail("");
  //     setPassword("");

  //  };

  const handleSignIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    signIn(email, password);
  };
  const { formTitle, isRegisterForm, btnText } = props;
  return (
    <form>
      <h1>{formTitle}</h1>
      {isRegisterForm && (
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isRegisterForm && (
        <a className={styles["forget-password-link"]}>Forgot your password?</a>
      )}
      <button type="submit" className={styles.button} onClick={handleSignIn}>
        {btnText}
      </button>
    </form>
  );
};

export default Form;
