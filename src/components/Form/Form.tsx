import styles from './Form.module.css'

interface FormProps {
  formTitle: string;
  isRegisterForm: boolean;
  btnText: string;
}

const Form = (props: FormProps) => {
  const { formTitle, isRegisterForm, btnText } = props;
  return (
    <form>
      <h1>{formTitle}</h1>
      {isRegisterForm && <input id="name" type="text" placeholder="Name" />}
      <input id="email" type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      {!isRegisterForm && <a className={styles['forget-password-link']}>Forgot your password?</a>}
      <button type="submit" className={styles.button}>{btnText}</button>
    </form>
  );
};

export default Form;
