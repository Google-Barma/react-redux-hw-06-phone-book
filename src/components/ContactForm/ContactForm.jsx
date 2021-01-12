import { useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import s from './ContactForm.module.css';
import { addContacts } from '../../redux/contacts-actions';

function ContactsForm({ onAddContacts }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onAddContacts(name, phone);
    setName('');
    setPhone('');
  };

  return (
    <>
      <form className={s.form} onSubmit={e => handleSubmit(e)}>
        <label id="name" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label id="phone" htmlFor="phone">
          Phone
        </label>
        <input
          className={s.input}
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button type="submit" disabled={!(name && phone)}>
          add contact
        </button>
      </form>
    </>
  );
}

ContactsForm.propTypes = {
  onAddContacts: propTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onAddContacts: (name, phone) => dispatch(addContacts(name, phone)),
});

export default connect(null, mapDispatchToProps)(ContactsForm);
