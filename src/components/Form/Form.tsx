import { useState } from "react";
import styles from "./Form.module.css";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { saveName } from "../../redux/slices/authSlice";

interface FormProps {
  formTitle: string;
  isRegisterForm: boolean;
  btnText: string;
  handleClick: (email: string, password: string, userName?: string) => void;
}

const Form = (props: FormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { formTitle, isRegisterForm, btnText, handleClick } = props;

  const state = useSelector((state: RootState) => state.auth);

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(saveName(name));

    handleClick(email, password, name);
  };
  return (
    <form>
      <h1>{formTitle}</h1>
      {isRegisterForm && (
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
      )}
      <input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {<p className={styles.error}>{state.error}</p>}
      {!isRegisterForm && (
        <a className={styles["forget-password-link"]}>Forgot your password?</a>
      )}
      <button type="submit" className={styles.button} onClick={handleSubmit}>
        {btnText}
      </button>
    </form>
  );
};

export default Form;
