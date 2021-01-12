import { connect } from 'react-redux';
import { deleteContacts } from '../../redux/contacts-actions';
import propTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactsList({ contactsData, onDeleteBtn }) {
  return (
    <>
      <ul>
        {contactsData.map(({ id, name, phone }) => (
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
  contactsData: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      phone: propTypes.string,
    }),
  ),
};

const mapDispatchToProps = dispatch => ({
  onDeleteBtn: id => dispatch(deleteContacts(id)),
});

export default connect(null, mapDispatchToProps)(ContactsList);
