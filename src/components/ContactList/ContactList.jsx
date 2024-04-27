import { ColorRing } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  apiDeleteContact,
  apiGetContacts,
} from "../../redux/contacts/operations";
import {
  selectGetError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { selectVisibleContacts } from "../../redux/filters/selectors";
import { ErrorMessage } from "formik";
import { toast } from "react-hot-toast";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredProfiles = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectGetError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  const onDeleteContact = (contactId) => {
    dispatch(apiDeleteContact(contactId));
    if (onDeleteContact) {
      toast.success("Successfully deleted!");
      return;
    }
  };

  return (
    <div className={css.list}>
      {isLoading && (
        <ColorRing
          visible={true}
          /*           height="80" */
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#FFFF00", "#FFA500", "#FF0000", "#FFA500", "#FFFF00"]}
        />
      )}
      {isError && <ErrorMessage />}
      <ul className={css.ulWrap}>
        {filteredProfiles !== null &&
          filteredProfiles.map((contact) => {
            return (
              <li className={css.item} key={contact.id}>
                <span>
                  <h3>Name: {contact.name}</h3>
                  <p>Phone: {contact.number}</p>
                </span>
                <button
                  className={css.btn}
                  onClick={() => onDeleteContact(contact.id)}
                  type="button"
                  aria-label="Delete contact"
                >
                  Delete contact
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default ContactList;
