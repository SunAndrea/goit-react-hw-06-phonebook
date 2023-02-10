import { AiFillDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';

import css from './ContactsList.module.css';
const ContactsListItem = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);

  const filteredContacts = contacts.info.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
  return filteredContacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: <span>{number} </span>
        <button
          onClick={() => dispatch(deleteContact(id))}
          className={css.deleteBtn}
          type="button"
        >
          <AiFillDelete color="red" />
        </button>
      </li>
    );
  });
};

export default ContactsListItem;
