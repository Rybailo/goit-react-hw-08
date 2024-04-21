import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  ErrorMsg,
  Label,
  StyledField,
  StyledForm,
} from "../ContactForm/ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";

import { toast } from "react-hot-toast";
import { addContact } from "../../services/api";

const UserRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

export const LoginForm = ({ onLoginUser }) => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  /* const handleSubmit = (values, actions) => {
    actions.resetForm();
    const { name, email, password } = values;
    const isExist = values.some(
      (value) => value.email.toLowerCase() === email.toLowerCase()
    );
    onRegister(values);

    if (isExist) {
      toast.error(`${email} is already in registered.`);
      actions.resetForm();
      return;
    }

    dispatch(addContact({ name, email, password })); */
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
      <StyledForm>
        <h2>Login</h2>
        <Label>
          {" "}
          Email:
          <StyledField name="email" type="text" />
          <ErrorMsg name="email" component="div" />
        </Label>
        <Label>
          Password:
          <StyledField name="password" type="password" />
          <ErrorMsg name="password" component="div" />
        </Label>
        <Button type="submit">Sign in</Button>
      </StyledForm>
    </Formik>
  );
};
