import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";

const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("User name is required!")
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const RegisterForm = ({ onRegisterUser }) => {
  const handleSubmit = (data, formActions) => {
    onRegisterUser(data);
    formActions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={UserRegisterSchema}
    >
      <Form className={css.registerFrom}>
        <h2>Register</h2>
        <label className={css.registerFromLabel}>
          User name:
          <Field className={css.registerFormInput} name="name" type="text" />
          <ErrorMessage className={css.ErrorMsg} name="name" component="div" />
        </label>
        <label className={css.registerFromLabel}>
          Email:
          <Field className={css.registerFormInput} name="email" type="text" />
          <ErrorMessage className={css.ErrorMsg} name="email" component="div" />
        </label>
        <label className={css.registerFromLabel}>
          Password:
          <Field
            className={css.registerFormInput}
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
          Sign up
        </button>
      </Form>
    </Formik>
  );
};
export default RegisterForm;
