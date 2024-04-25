import { Button } from "../ContactForm/ContactForm.styled";
import { ContactWrapper } from "./Contact.styled";
import { useDispatch, useSelector } from "react-redux";
import { apiDeleteContact } from "../../redux/contacts/operations";
import {
  selectGetContacts,
  selectGetError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { selectVisibleContacts } from "../../redux/filters/selectors";

const Contact = (/* { contact: { id, name, number } } */) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectGetContacts);
  /*   const isLoading = useSelector(selectIsLoading); */
  const isError = useSelector(selectGetError);
  const filteredProfiles = useSelector(selectVisibleContacts);
  const handleDelete = (contactId) => {
    dispatch(apiDeleteContact(contactId));
  };
  return (
    <ContactWrapper>
      {isError && <ErrorMessage />}
      {/* <ul>
        {filteredProfiles !== null &&
          filteredProfiles.map((contact) => {
            return (
              <li key={contact.id}>
                <h3>Name: {contact.name}</h3>
                <p>Phone: {contact.number}</p>
                <Button type="button" onClick={() => handleDelete(contact.id)}>
                  Delete
                </Button>
              </li>
            );
          })}
      </ul> */}
      {/* <p>
        Name: {name}, Phone: {number}
      </p> */}
    </ContactWrapper>
  );
};

export default Contact;
