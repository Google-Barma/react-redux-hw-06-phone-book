import { connect } from 'react-redux';
import { deleteContacts } from '../../redux/contacts-actions';
import propTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactsList({ contacts, onDeleteBtn }) {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p className={s.nameText}>
              {name}: <span>{phone}</span>
            </p>
            <button type="button" onClick={e => onDeleteBtn(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  onDeleteBtn: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      phone: propTypes.string,
    }),
  ),
};

const filteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ contacts, filter }) => {
  return {
    contacts: filteredContacts(contacts, filter),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteBtn: id => dispatch(deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
