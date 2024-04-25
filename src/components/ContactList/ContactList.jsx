import { ColorRing } from "react-loader-spinner";
import { List } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  apiDeleteContact,
  apiGetContacts,
} from "../../redux/contacts/operations";
import {
  selectGetContacts,
  selectGetError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { selectVisibleContacts } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import { ErrorMessage } from "formik";

const ContactList = () => {
  const filteredProfiles = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectGetContacts);
  const isError = useSelector(selectGetError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const onAddContact = (FormData) => {
    dispatch(apiGetContacts(FormData));
  };

  const onDeleteContact = (contactId) => {
    dispatch(apiDeleteContact(contactId));
  };

  return (
    <List>
      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#FFFF00", "#FFA500", "#FF0000", "#FFA500", "#FFFF00"]}
        />
      )}
      {isError && <ErrorMessage />}
      <ul>
        {filteredProfiles !== null &&
          filteredProfiles.map((contact) => {
            return (
              <li key={contact.id}>
                <h3>Name: {contact.name}</h3>
                <p>Phone: {contact.number}</p>
                <button
                  onClick={() => onDeleteContact(contact.id)}
                  type="button"
                  aria-label="Delete contact"
                >
                  &times;
                </button>
              </li>
            );
          })}
      </ul>
      {/* {filteredProfiles.map((item) => (
        <li key={item.id}>
          <Contact contact={item} />
        </li>
      ))} */}
    </List>
  );
};
export default ContactList;
