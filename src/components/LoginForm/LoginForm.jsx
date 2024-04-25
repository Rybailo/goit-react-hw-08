import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  ErrorMsg,
  Label,
  StyledField,
  StyledForm,
} from "../ContactForm/ContactForm.styled";
/* import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-hot-toast";
import { selectGetContacts } from "../../redux/contacts/selectors"; */

const UserRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const LoginForm = ({ onLoginUser }) => {
  /*   const contacts = useSelector(selectGetContacts);
  const dispatch = useDispatch(); */
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

export default LoginForm;
