import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  ErrorMsg,
  Label,
  StyledField,
  StyledForm,
} from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-hot-toast";
import { apiAddContact } from "../../redux/contacts/operations";
import { selectGetContacts } from "../../redux/contacts/selectors";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .test(
      "name",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      (value) =>
        /^[a-zA-Zа-яА-Я]+((['][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(value)
    )
    .required("Required"),
  number: Yup.string()
    .test(
      "number",
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
      (value) =>
        /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/.test(
          value
        )
    )
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const contacts = useSelector(selectGetContacts);
  const dispatch = useDispatch();

  const handleSubmit = (formData, actions) => {
    actions.resetForm();
    const { name, number } = formData;
    const isExist = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isExist) {
      toast.error(`${name} or ${number} is already in contacts.`);
      actions.resetForm();
      return;
    }

    dispatch(apiAddContact({ name, number }));
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <StyledForm>
        <Label>
          Name:
          <StyledField name="name" type="text" />
          <ErrorMsg name="name" component="div" />
        </Label>
        <Label>
          Number:
          <StyledField name="number" type="tel" />
          <ErrorMsg name="number" component="div" />
        </Label>
        <Button onAddContact={onAddContact} type="submit">
          Add contact
        </Button>
      </StyledForm>
    </Formik>
  );
};
export default ContactForm;
