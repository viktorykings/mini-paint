import "./Form.module.css";

interface FormProps {
  formTitle: string;
  didForgetPassword: boolean;
  btnText: string;
}

const Form = (props: FormProps) => {
  const { formTitle, didForgetPassword, btnText } = props;
  return (
    <form>
      <h1>{formTitle}</h1>
      <input id="name" type="text" placeholder="Name" />
      <input id="email" type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      {didForgetPassword && <a>Forgot your password?</a>}
      <button type="submit">{btnText}</button>
    </form>
  );
};

export default Form;
