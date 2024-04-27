import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-hot-toast";
import { apiAddContact } from "../../redux/contacts/operations";
import { selectGetContacts } from "../../redux/contacts/selectors";
import css from "./ContactForm.module.css";

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

const ContactForm = () => {
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
    toast.success(`${name} successfully added `);
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
      <Form className={css.contForm}>
        <label className={css.contFormLabel}>
          Name:
          <Field className={css.contFormInput} name="name" type="text" />
          <ErrorMessage className={css.ErrorMsg} name="name" component="div" />
        </label>
        <label className={css.contFormLabel}>
          Number:
          <Field className={css.contFormInput} name="number" type="tel" />
          <ErrorMessage
            className={css.ErrorMsg}
            name="number"
            component="div"
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
