import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

const UserRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const LoginForm = ({ onLoginUser }) => {
  const handleSubmit = (data, formActions) => {
    onLoginUser(data);
    formActions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={UserRegisterSchema}
    >
      <Form className={css.loginFrom}>
        <h2>Login</h2>
        <label className={css.loginFromLabel}>
          Email:
          <Field className={css.loginFromField} name="email" type="text" />
          <ErrorMessage className={css.ErrorMsg} name="email" component="div" />
        </label>
        <label className={css.loginFromLabel}>
          Password:
          <Field
            className={css.loginFromField}
            name="password"
            type="password"
          />
          <ErrorMessage
            className={css.ErrorMsg}
            name="password"
            component="div"
          />
        </label>
        <button className={css.btn} type="submit">
          Sign in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
