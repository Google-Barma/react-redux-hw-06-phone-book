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
