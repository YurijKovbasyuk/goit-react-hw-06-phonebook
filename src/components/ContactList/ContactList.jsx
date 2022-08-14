import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setContacts, deleteContacts } from '../../redux/contacts';

function ContactList() {
  const contacts = useSelector(state => state.contacts.value);
  const valueFilter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  const handleFilter = e => {
    console.log('contact', contacts);

    contacts.filter(contact =>
      valueFilter.name.toLocaleLowerCase().includes(contact.toLocaleLowerCase())
    );
    dispatch(setContacts(e.target.value));
  };

  //    = itemId => {
  //   setContacts(contacts.filter(el => el.id !== itemId));
  // };

  return (
    <div>
      <ul className={styles.cont}>
        {contacts.map(contact => {
          const { id, number, name } = contact;
          return (
            <Contact
              onDelete={deleteContacts}
              key={id}
              number={number}
              name={name}
              id={id}
            />
          );
        })}
      </ul>
    </div>
  );
}

// ContactList.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   onFilter: PropTypes.func.isRequired,
// };

export default ContactList;
