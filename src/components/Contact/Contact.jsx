import styles from './Contact.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts';

function Contact({ id, number, name, onDelete }) {
  // const contacts = useSelector(state => state.contacts.value);
  const dispatch = useDispatch();

  // const contacts = useSelector(state => state.contacts.value);
  // const handleDelete = itemId => {
  //   deleteContacts(contacts.filter(el => el.id !== itemId));
  // };
  const deleteContact = () => {
    dispatch(deleteContacts(id));
  };
  return (
    <li className={styles.li}>
      {name + ': ' + number}
      <button
        className={styles.button}
        // onClick={onDelete}
        onClick={() => {
          deleteContact();
        }}
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  onDelete: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Contact;
