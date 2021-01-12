import { v4 as uuid } from 'uuid';
import types from './contacts-types';

export const addContacts = (name, phone) => ({
  type: types.ADD,
  payload: {
    id: uuid(),
    name,
    phone,
  },
});

export const deleteContacts = id => ({
  type: types.DELETE,
  payload: { id },
});

export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: { value },
});

export const filterContacts = contacts => ({
  type: types.FILTER_CONTACTS,
  payload: { contacts },
});
